import path from "path";
import {
  createTransaction,
  deleteTransactionsById,
  getTransactionsByUserId,
} from "./services/transaction-services";
import { dbInit } from "./dal/mongoose";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = path.join(__dirname, "../src/proto/accounting.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const accountingPackage =
  grpc.loadPackageDefinition(packageDefinition).accountingPackage;

const server = new grpc.Server();

server.addService(accountingPackage.AccountingService.service, {
  GetTransactionsById: getTransactionsByUserId,
  CreateTransaction: createTransaction,
  DeleteTransactionById: deleteTransactionsById,
});

dbInit();

server.bindAsync(
  "0.0.0.0:50053",
  grpc.ServerCredentials.createInsecure(),
  (err: string, port: string) => {
    if (err) {
      console.error("Server bind failed:", err);
      return;
    }
    console.log("Server bound on port:", port);
  }
);
