import { ServiceError } from "@grpc/grpc-js";
import { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import {
  createRecord,
  deleteTransactionById,
  getTransactionByUserId,
} from "../dal/accounting-data-helpers";
import {
  CreateTransactionInfo,
  TransactionActionResult,
  TransactionId,
  Transactions,
  UserId,
} from "../proto/accounting";

export const getTransactionsByUserId = async (
  call: { request: UserId },
  callback: UnaryCallback<Transactions>
) => {
  try {
    const transactions = await getTransactionByUserId(call.request.userId);
    callback(null, transactions);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};

export const createTransaction = async (
  call: { request: CreateTransactionInfo },
  callback: UnaryCallback<TransactionId>
) => {
  try {
    const transactions = await createRecord(call.request);
    callback(null, transactions);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};

export const deleteTransactionsById = async (
  call: { request: TransactionId },
  callback: UnaryCallback<TransactionActionResult>
) => {
  try {
    const result = await deleteTransactionById(call.request.id);
    callback(null, { message: result });
  } catch (error) {
    callback(error as ServiceError, undefined); 
  }
};
