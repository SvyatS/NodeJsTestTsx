import { InvoiceStatusConst } from "#/models/Invoice/interface";
import { IAnyKey } from "#/utils";

export const requestWebhookSchema = {
  type: 'object',
  properties: {
    invoiceId: { type: 'string', minLength: 1 },
    status: { type: 'string', enum: [InvoiceStatusConst.Paid, InvoiceStatusConst.Failed] }
  },
  required: ['invoiceId', 'status'],
  additionalProperties: false
};

export const responseWebhookSchema = (data: IAnyKey) => {
    return {}
}