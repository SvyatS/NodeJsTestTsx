import Decimal from 'decimal.js';

Decimal.set({ rounding: Decimal.ROUND_HALF_EVEN });

export function calculateFee(amount: number | string, feePercent: number | string) {
  const decAmount = new Decimal(amount);
  const decPercent = new Decimal(feePercent);
  
  const fee = decAmount.mul(decPercent).div(100).toDecimalPlaces(2);
  const amountToReceive = decAmount.minus(fee).toDecimalPlaces(2);

  return {
    fee: fee.toNumber(),
    amountToReceive: amountToReceive.toNumber(),
  };
}