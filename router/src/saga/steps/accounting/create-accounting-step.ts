import { ServiceError } from "@grpc/grpc-js";
import { AccountingClient } from "../../../grpc-client/accounting-client-setup";
import { TodoInput } from "../../../types/graphql/graphql";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";

export const CreateAccountingStep: BaseStep<TodoInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      AccountingClient.CreateTransaction(
        {
          from: context.user,
          to: "Todo",
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
      AccountingClient.DeleteTransactionById(
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
