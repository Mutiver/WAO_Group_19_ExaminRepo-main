import { ServiceError } from "@grpc/grpc-js";
import { UnaryCallback } from "@grpc/grpc-js/build/src/client";
import {
  createTodo,
  deleteTodoById,
  getTodosByUserId,
  updateTodoById,
} from "../dal/todo-data-helpers";
import { ITodoId, ITodoRequest } from "../models/todo";
import {
  Todo,
  TodoCreateDto,
  TodoDeleteInfo,
  TodoUpdateDto,
  Todos,
} from "../proto/todo";

export const getTodosByUserIdHandler = async (
  call: { request: ITodoRequest },
  callback: UnaryCallback<Todos>
) => {
  try {
    const todos = await getTodosByUserId(call.request.userId);
    callback(null, todos);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};

export const createTodoHandler = async (
  call: { request: TodoCreateDto },
  callback: UnaryCallback<Todo>
) => {
  try {
    const newTodo = await createTodo(call.request);
    callback(null, newTodo);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};

export const deleteTodoByIdHandler = async (
  call: { request: TodoDeleteInfo },
  callback: UnaryCallback<string>
) => {
  try {
    console.log(call.request);
    var res = await deleteTodoById(call.request);
    callback(null, res);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};

export const updateTodoByIdHandler = async (
  call: { request: TodoUpdateDto },
  callback: UnaryCallback<Todo>
) => {
  try {
    const todo = await updateTodoById(call.request);
    callback(null, todo);
  } catch (error) {
    callback(error as ServiceError, undefined);
  }
};
