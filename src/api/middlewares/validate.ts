import { Request, Response, NextFunction } from 'express';
import { ErrorObject } from 'ajv'
import { ajv } from '#/libs/Ajv';

export const validateTarget = {
    Body: 'body',
    Params: 'params'
} as const;

export const validate = (schema: object, target: typeof validateTarget[keyof typeof validateTarget] = validateTarget.Body) => {
  const validateFn = ajv.compile(schema);

  return (req: Request, res: Response, next: NextFunction) => {
    let data = req[target];

    if (target === 'body' && (Buffer.isBuffer(data) || typeof data === 'string')) {
      // Сохраняем сырые данные для проверки HMAC в контроллере
      (req as any).rawBody = data; 
      
      try {
        data = JSON.parse(data.toString());
        req.body = data; 
      } catch (e) {
        return next(
          new Error(JSON.stringify({ message: 'Invalid json payload' }))
        );
      }
    }

    const valid = validateFn(data);

    if (!valid) {
      const errors = validateFn.errors
        ?.map((e: ErrorObject) => {
          const field = e.instancePath ? e.instancePath.substring(1) : 'root';
          return { [field]: `${e.message}` };
        })
        
      return next(
        new Error(JSON.stringify({ message: 'Validation failed', data: errors }))
      );
    }

    next();
  };
};