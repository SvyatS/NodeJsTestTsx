import { Request, Response, NextFunction } from 'express';
import { responseGetInvoiceSchema } from './schema';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const result = await InvoiceService.getInvoice(req.params.id);
      res.status(200).json(responseGetInvoiceSchema({ invoiceId: '1', status: 'paid'} ));
    } catch (error) {
      next(error);
    }
};