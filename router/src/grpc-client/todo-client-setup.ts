import path from "path";
import { CreateTodoString } from "../helpers/create-connections";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = path.join(__dirname, "../types/proto/todo.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var todo = grpc.loadPackageDefinition(packageDefinition).todoPackage;

export const TodoClient = new todo.TodoService(
  CreateTodoString(),
  grpc.credentials.createInsecure()
);
