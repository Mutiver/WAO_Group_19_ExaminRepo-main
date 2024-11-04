import { ServiceError } from "@grpc/grpc-js";
import { TodoClient } from "../../../grpc-client/todo-client-setup";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";
import { TodoDeleteInput } from "../../../types/graphql/graphql";

export const DeleteTodoStep: BaseStep<TodoDeleteInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.DeleteTodoById(
        { idTodo: object?.id, userId: context.user },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to delete todo with id: ${object?.id}`);
            reject(err);
          } else {
            console.log(`Deleted todo with id: ${object?.id}`);
            resolve();
          }
        }
      );
    });
  },

  compensation: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.DeleteTodoById(
        { idTodo: object?.id, userId: context.user },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to unDelete todo with id: ${object.id}`);
            reject(err);
          } else {
            console.log(`Deleted todo with id: ${object.id}`);
            resolve();
          }
        }
      );
    });
  },
};
