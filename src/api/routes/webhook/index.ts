import { Router } from 'express';
import { webhookController} from '#/api/controllers/webhook/';
import { validate } from '#/api/middlewares/validate'
import { rawBodyMiddleware } from '#/api/middlewares/rawBody';

export const WebHookRouter = Router();

WebHookRouter.post('/',
    rawBodyMiddleware,
    validate(webhookController.schema),
    webhookController.handler
);