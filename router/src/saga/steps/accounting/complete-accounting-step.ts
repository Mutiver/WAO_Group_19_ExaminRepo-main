import { ServiceError } from "@grpc/grpc-js";
import { AccountingClient } from "../../../grpc-client/accounting-client-setup";
import { TodoClient } from "../../../grpc-client/todo-client-setup";
import { TodoUpdateInput } from "../../../types/graphql/graphql";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";

export const CompleteAccountingStep: BaseStep<TodoUpdateInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      AccountingClient.CreateTransaction(
        {
          from: "Todo",
          to: object.taken,
          amount: object.price,
        },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to create accounting record`);
            reject(err);
          } else {
            console.log(`Created accounting record with id: ${res.id}`);
            context.recordId = res.id;
            resolve();
          }
        }
      );
    });
  },
  compensation: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      TodoClient.DeleteTransactionById(
        { id: context.recordId },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(
              `Failed to delete accounting record  with id: ${context.todoId}`
            );
            reject(err);
          } else {
            console.log(
              `Deleted accounting record  with id: ${context.todoId}`
            );
            resolve();
          }
        }
      );
    });
  },
};
