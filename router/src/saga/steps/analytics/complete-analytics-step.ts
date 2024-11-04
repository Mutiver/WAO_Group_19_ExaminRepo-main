import { ServiceError } from "@grpc/grpc-js";
import { AnalyticsClient } from "../../../grpc-client/analytics-client-setup";
import { TodoUpdateInput } from "../../../types/graphql/graphql";
import { Todo } from "../../../types/proto/todo";
import { BaseStep } from "../../step-base";

export const CompleteAnalyticsStep: BaseStep<TodoUpdateInput> = {
  action: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      AnalyticsClient.UpdateAnalytics(
        {
          userId: context.user,
          NumberOfTodos: 0,
          NumberOfTransactions: 1,
        },
        (err: ServiceError, res: Todo) => {
          if (err) {
            console.log(`Failed to update analytics stats`);
            reject(err);
          } else {
            console.log(`Updated analytics stats`);
            context.recordId = res.id;
            resolve();
          }
        }
      );
    });
  },
  compensation: async (context, object) => {
    return new Promise<void>((resolve, reject) => {
      return new Promise<void>((resolve, reject) => {
        AnalyticsClient.UpdateAnalytics(
          {
            userId: context.user,
            NumberOfTodos: 0,
            NumberOfTransactions: -1,
          },
          (err: ServiceError, res: Todo) => {
            if (err) {
              console.log(`Failed to update analytics stats`);
              reject(err);
            } else {
              console.log(`Updated analytics stats`);
              context.recordId = res.id;
              resolve();
            }
          }
        );
      });
    });
  },
};
