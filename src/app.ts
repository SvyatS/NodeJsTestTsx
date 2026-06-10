import express, { Application } from 'express';

export const app: Application = express();

app.use(express.json());

app.post('/invoice', async (req, res, next) => {
  try {
    return res.status(201).json({ ok: true, message: 'Invoice created' });
  } catch (error) {
    return res.status(201).json({ ok: false, message: 'Invoice not created' });
  }
});

