export const InvoiceStatusConst = {
  Pending: 'pending',
  Paid: 'paid',
  Failed: 'failed'
} as const;

export type InvoiceStatusType = typeof InvoiceStatusConst[keyof typeof InvoiceStatusConst];

export interface IInvoice {
  invoiceId: string;
  merchantId: string;
  amount: number;
  currency: string;
  fee: number;
  amountToReceive: number;
  status: InvoiceStatusType;
  createdAt: Date;
  updatedAt: Date;
};