import { Schema, model, Document } from 'mongoose';
import { IMerchant } from './interface';

const merchantSchema = new Schema<IMerchant>({
  merchantId: { type: String, required: true, unique: true },
  feePercent: { type: Number, required: true },
});

export const Merchant = model<IMerchant>('Merchant', merchantSchema);