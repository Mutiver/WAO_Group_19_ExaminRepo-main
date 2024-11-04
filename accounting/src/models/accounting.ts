import mongoose, { Model, Schema } from "mongoose";
import { TransactionCreateDto } from "../proto/accounting";

interface MongoTransaction extends TransactionCreateDto {
  isDeleted: boolean;
}

type MongoTransactionType = Model<MongoTransaction>;

const transactionSchema: Schema = new Schema(
  {
    from: { type: String, required: true },
    to: { type: String, required: true },
    amount: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true },
  },
  { collection: "transaction" }
);

export const TransactionModel = mongoose.model<
  MongoTransaction,
  MongoTransactionType
>("Todo", transactionSchema);
