import handler from "./handler"
import { requestGetInvoiceSchema } from "./schema"

export const getInvoiceController = {
    handler,
    schema: requestGetInvoiceSchema
};