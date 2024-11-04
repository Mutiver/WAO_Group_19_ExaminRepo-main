import mongoose from "mongoose";
import { ITodoResponse, TodoModel } from "../models/todo";
import {
  Todo,
  TodoCreateDto,
  TodoDeleteInfo,
  TodoUpdateDto,
} from "../proto/todo";

export const getTodosByUserId = async (
  userId: string
): Promise<ITodoResponse> => {
  return {
    todos: (
      await TodoModel.find({
        isDeleted: false,
        $or: [
          { userId: userId },
          { taken: userId },
          { taken: "" },
          { taken: null },
        ],
      })
    ).map<Todo>((todo) => ({
      description: todo.description,
      id: todo._id.toString(),
      isCompleted: todo.isCompleted,
      taken: todo.taken,
      title: todo.title,
      price: todo.price,
      userId: todo.userId,
    })),
  };
};

export const createTodo = async (todoData: TodoCreateDto): Promise<Todo> => {
  if (!todoData) throw new Error("Todo data is missing");

  var todoDocument = await TodoModel.create({
    description: todoData.description,
    isCompleted: false,
    taken: null,
    price: todoData.price,
    userId: todoData.userId,
    title: todoData.title,
    isDeleted: false,
  });

  return {
    description: todoDocument.description,
    isCompleted: todoDocument.isCompleted,
    taken: todoDocument.taken,
    price: todoDocument.price,
    userId: todoDocument.userId,
    title: todoDocument.title,
    id: todoDocument._id.toString(),
  };
};

export const deleteTodoById = async (
  todoInfo: TodoDeleteInfo
): Promise<string> => {
  const objectId = new mongoose.Types.ObjectId(todoInfo.idTodo);

  const todo = await TodoModel.findById(objectId);

  if (!todo || todo.userId !== todoInfo.userId)
    throw new Error("Todo not found");

  todo.isDeleted = !todo.isDeleted;

  await todo.save();

  return "Success";
};

export const updateTodoById = async (
  todoToUpdate: TodoUpdateDto
): Promise<Todo> => {
  const objectId = new mongoose.Types.ObjectId(todoToUpdate.id);

  const todo = await TodoModel.findById(objectId);

  if (!todo) throw new Error("Todo not found");

  const originalTodo = { ...todo.toObject() };

  todo.taken = todoToUpdate.taken;
  todo.isCompleted = todoToUpdate.isCompleted;

  await todo.save();

  return {
    description: originalTodo.description,
    id: originalTodo._id.toString(),
    isCompleted: originalTodo.isCompleted,
    price: originalTodo.price,
    taken: originalTodo.taken,
    title: originalTodo.title,
    userId: originalTodo.userId,
  };
};
