import { Router } from 'express';
import { getInvoiceController } from '#/api/controllers/invoice/getInvoice/';
import { createInvoiceController } from '#/api/controllers/invoice/createInvoice/';
import { validate, validateTarget } from '#/api/middlewares/validate'

export const InvoiceRouter = Router();

InvoiceRouter.post('/',
    validate(createInvoiceController.schema),
    createInvoiceController.handler,
)

InvoiceRouter.get('/:id',
    validate(getInvoiceController.schema, validateTarget.Params),
    getInvoiceController.handler,
)