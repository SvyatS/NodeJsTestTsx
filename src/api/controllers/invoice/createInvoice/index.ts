import handler from "./handler"
import { requestCreateInvoiceSchema } from "./schema"

export const createInvoiceController = {
    handler,
    schema: requestCreateInvoiceSchema
};