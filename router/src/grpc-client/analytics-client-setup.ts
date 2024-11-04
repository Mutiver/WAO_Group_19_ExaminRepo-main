import path from "path";
import { CreateAnalyticsString } from "../helpers/create-connections";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH_ANALYTICS = path.join(
  __dirname,
  "../types/proto/analytics.proto"
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH_ANALYTICS, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const analytics = grpc.loadPackageDefinition(packageDefinition).analytics;

export const AnalyticsClient = new analytics.Analytics(
  CreateAnalyticsString(),
  grpc.credentials.createInsecure()
);
