import mongoose, { Model, Schema } from "mongoose";
import { Todo } from "../proto/todo";

export interface ITodoRequest {
  userId: string;
}

export interface ITodoResponse {
  todos: Todo[];
}

export interface ITodoId {
  id: string;
}

export interface IDeleteTodoResponse {
  message: string;
}

interface MongoTodo extends Todo {
  isDeleted: boolean;
}

type MongoTodoType = Model<MongoTodo>;

const todoSchema = new Schema({
  description: { type: String, required: true },
  title: { type: String, required: true },
  taken: { type: String },
  isCompleted: { type: Boolean, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
  isDeleted: { type: Boolean, required: true },
},{ collection: 'todo' });

export const TodoModel = mongoose.model<MongoTodo, MongoTodoType>(
  "Transaction",
  todoSchema
);
