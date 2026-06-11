import { IInvoice } from "#/models/Invoice/interface";
import { IAnyKey } from "#/utils";

export const requestGetInvoiceSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' }
  },
  required: ['id'],
  additionalProperties: false
};

export const responseGetInvoiceSchema = (data: Partial<IInvoice> & IAnyKey) => {
    return {
        invoiceId: data?.invoiceId,
        paid: data?.status
    }
}