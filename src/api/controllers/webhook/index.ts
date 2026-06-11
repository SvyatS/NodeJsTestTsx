import handler from "./handler"
import { requestWebhookSchema } from "./schema"

export const webhookController = {
    handler,
    schema: requestWebhookSchema
};