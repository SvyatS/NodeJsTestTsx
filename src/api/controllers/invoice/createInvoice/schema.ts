import { IInvoice } from "#/models/Invoice/interface";
import { IAnyKey } from "#/utils";

export const requestCreateInvoiceSchema = {
  type: 'object',
  properties: {
    merchantId: { type: 'string', minLength: 1 },
    amount: { type: 'number', minimum: 0.01 },
    currency: { type: 'string' }
  },
  required: ['merchantId', 'amount', 'currency'],
  additionalProperties: false
};

export const responseCreateInvoiceSchema = (data: Partial<IInvoice> & IAnyKey) => {
    return {
        invoiceId: data?.invoiceId,
        amountToReceive: data?.amountToReceive,
        fee: data?.fee,
    }
}