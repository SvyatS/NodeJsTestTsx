import { verifySignature } from "./crypto";
import { calculateFee } from "./moneyCalculation";

interface IAnyKey {[key: string]: any}

export {
    verifySignature,
    calculateFee,
    type IAnyKey
}