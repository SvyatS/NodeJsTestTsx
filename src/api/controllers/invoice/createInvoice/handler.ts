import { Request, Response, NextFunction } from 'express';
import { responseCreateInvoiceSchema } from './schema';

export default async (req: Request, res: Response, next: NextFunction) => {
     try {
      const { merchantId, amount, currency } = req.body;
    //   const result = await InvoiceService.createInvoice(merchantId, amount, currency);
      res.status(200).json(responseCreateInvoiceSchema({ invoiceId: 'aasd', amountToReceive: 123, fee: 123 }));
    } catch (error) {
      next(error);
    }
};