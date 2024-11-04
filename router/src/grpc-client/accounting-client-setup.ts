import path from "path";
import { CreateAccountingString } from "../helpers/create-connections";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH_ACCOUNTING = path.join(
  __dirname,
  "../types/proto/accounting.proto"
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH_ACCOUNTING, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const accounting =
  grpc.loadPackageDefinition(packageDefinition).accountingPackage;

export const AccountingClient = new accounting.AccountingService(
  CreateAccountingString(),
  grpc.credentials.createInsecure()
);
