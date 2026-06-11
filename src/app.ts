import express, { Application } from 'express';
import { router as Router } from '#/api/routes';
import { errorHandler } from '#/api/middlewares/errorHandler';

export const app: Application = express();

app.use(express.json());
app.use('', Router)
app.use(errorHandler)
