import { ServiceError } from "@grpc/grpc-js";
import { TodoClient } from "../../../grpc-client/todo-client-setup";
import { TodoUpdateInput } from "../../../types/graphql/graphql";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";

export const UpdateTodoStep: BaseStep<TodoUpdateInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.UpdateTodoById(object, (err: ServiceError, res: Todo) => {
        if (err) {
          console.log(`Failed to update todo with id: ${object?.id}`);
          reject(err);
        } else {
          console.log(`updated todo with id: ${object?.id}`);
          resolve();
          context.todo = res;
        }
      });
    });
  },

  compensation: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.UpdateTodoById(
        context.todo,
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to undo update todo with id: ${object.id}`);
            reject(err);
          } else {
            console.log(`undid update todo with id: ${object.id}`);
            resolve();
          }
        }
      );
    });
  },
};
