import { ServiceError } from "@grpc/grpc-js";
import { TodoClient } from "../../../grpc-client/todo-client-setup";
import { TodoInput } from "../../../types/graphql/graphql";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";

export const CreateTodoStep: BaseStep<TodoInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.CreateTodo(
        {
          description: object.description,
          price: object.price,
          title: object.title,
          userId: context.user,
        },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to create todo`);
            reject(err);
          } else {
            console.log(`Created todo with id: ${res.id}`);
            context.todoId = res.id;
            resolve();
          }
        }
      );
    });
  },
  compensation: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.DeleteTodoById(
        { idTodo: context.todoId, userId: context.user },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to unDelete todo with id: ${context.todoId}`);
            reject(err);
          } else {
            console.log(`Deleted todo with id: ${context.todoId}`);
            resolve();
          }
        }
      );
    });
  },
};
