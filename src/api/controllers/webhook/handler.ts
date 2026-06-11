import { Request, Response, NextFunction } from 'express';
import { responseWebhookSchema } from './schema';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
    //   const result = await WebhookService.processWebhook(
    //   invoiceId,
    //   status as 'paid' | 'failed',
    //   signature,
    //   timestamp,
    //   nonce,
    //   payload,
    //   merchant.secretKey
    // );
      res.status(200).json(responseWebhookSchema({}));
    } catch (error) {
      next(error);
    }
};