import path from "path";
import {
  createTodoHandler,
  deleteTodoByIdHandler,
  getTodosByUserIdHandler,
  updateTodoByIdHandler,
} from "./services/todo-services";
import { dbInit } from "./dal/mongoose";
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = path.join(__dirname, "../src/proto/todo.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const todoPackage = grpc.loadPackageDefinition(packageDefinition).todoPackage;

const server = new grpc.Server();

server.addService(todoPackage.TodoService.service, {
  GetTodos: getTodosByUserIdHandler,
  DeleteTodoById: deleteTodoByIdHandler,
  CreateTodo: createTodoHandler,
  UpdateTodoById: updateTodoByIdHandler,
});

dbInit();

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err: string, port: string) => {
    if (err) {
      console.error("Server bind failed:", err);
      return;
    }
    console.log("Server bound on port:", port);
  }
);
