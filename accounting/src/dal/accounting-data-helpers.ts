import mongoose from "mongoose";
import { TransactionModel } from "../models/accounting";
import {
  Transaction,
  TransactionCreateDto,
  TransactionId,
  Transactions,
} from "../proto/accounting";

export const getTransactionByUserId = async (
  userId: string
): Promise<Transactions> => {
  return {
    Transactions: (
      await TransactionModel.find({
        isDeleted: false,
        $or: [{ from: userId }, { to: userId }],
      })
    ).map<Transaction>((transaction) => ({
      amount: transaction.amount,
      from: transaction.from,
      id: transaction._id.toString(),
      to: transaction.to,
    })),
  };
};

export const createRecord = async (
  transaction: TransactionCreateDto
): Promise<TransactionId> => {
  if (!transaction) throw new Error("Todo data is missing");

  const record = await TransactionModel.create({
    to: transaction.to,
    amount: transaction.amount,
    from: transaction.from,
    isDeleted: false,
  });

  return {
    id: record._id.toString(),
  };
};

export const deleteTransactionById = async (
  transactionId: string
): Promise<string> => {
  const objectId = new mongoose.Types.ObjectId(transactionId);

  const transaction = await TransactionModel.findByIdAndUpdate(objectId, {
    isDeleted: true,
  });

  if (!transaction) throw new Error("Transaction not found");

  return "Success";
};
