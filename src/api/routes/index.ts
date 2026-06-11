import { Router } from 'express';
import { WebHookRouter } from './webhook';
import { InvoiceRouter } from './invoice';

export const router = Router();

router.use('/webhook', WebHookRouter);
router.use('/invoice', InvoiceRouter)