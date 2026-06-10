import { Schema, model } from 'mongoose';
import { IInvoice, InvoiceStatusConst } from './interface';

const invoiceSchema = new Schema<IInvoice>({
  invoiceId: { type: String, required: true, unique: true },
  merchantId: { type: String, required: true, index: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  fee: { type: Number, required: true },
  amountToReceive: { type: Number, required: true },
  status: { type: String, enum: Object.values(InvoiceStatusConst), default: InvoiceStatusConst.Pending },
}, { timestamps: true });

export const Invoice = model<IInvoice>('Invoice', invoiceSchema);