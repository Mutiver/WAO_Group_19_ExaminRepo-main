import { ServiceError } from "@grpc/grpc-js";
import { AccountingClient } from "../grpc-client/accounting-client-setup";
import { AnalyticsClient } from "../grpc-client/analytics-client-setup";
import { TodoClient } from "../grpc-client/todo-client-setup";
import { orchestrator } from "../saga/orchestrator";
import {
  completeTodoSteps,
  createTodoSteps,
  deleteTodoSteps,
  leaveTodoSteps,
  takeTodoSteps,
} from "../saga/steps/steps";
import { AnalyticsReply, Resolvers } from "../types/graphql/graphql";
import { Transactions } from "../types/proto/accounting";
import { ReplyStat } from "../types/proto/analytics";
import { Todos } from "../types/proto/todo";

export const resolvers: Resolvers = {
  Query: {
    getTodos: async (_, {}, context) => {
      try {
        const todosResponse = await new Promise<Todos>((resolve, reject) => {
          TodoClient.GetTodos(
            { userId: context.user },
            (err: ServiceError, res: Todos) => {
              if (err) {
                reject(err);
              } else {
                resolve(res);
              }
            }
          );
        });

        return {
          todos: todosResponse.todos.map((todo) => ({
            price: todo.price,
            description: todo.description,
            id: todo.id,
            isCompleted: todo.isCompleted,
            title: todo.title,
            taken: todo.taken || "",
            userId: todo.userId,
          })),
        };
      } catch (error) {
        console.error("Error fetching todos:", error);
        return { todos: [] };
      }
    },
    getAnalytics: async (_, {}, context) => {
      try {
        return await new Promise<AnalyticsReply>((resolve, reject) => {
          AnalyticsClient.GetAnalytics(
            { userId: context.user },
            (err: ServiceError, res: ReplyStat) => {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                resolve({
                  numberOfTodos: res.NumberOfTodos,
                  numberOfTransactions: res.NumberOfTransactions,
                });
              }
            }
          );
        });
      } catch (error) {
        console.error("Error fetching transactions:", error);
        return { numberOfTodos: 0, numberOfTransactions: 0 };
      }
    },
    getAccounting: async (_, {}, context) => {
      try {
        return await new Promise<Transactions>((resolve, reject) => {
          AccountingClient.GetTransactionsById(
            { userId: context.user },
            (err: ServiceError, res: Transactions) => {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                console.log(res);
                resolve(res);
              }
            }
          );
        });
      } catch (error) {
        console.error("Error fetching transactions:", error);
        return { Transactions: [] };
      }
    },
  },
  Mutation: {
    createTodo: (_, { todo }, context) => {
      orchestrator(createTodoSteps, context, todo)
        .then(() => {
          console.log("Order Orchestrator finished");
        })
        .catch((error) => {
          console.error("Order Orchestrator encountered an error", error);
        });

      return { message: "Success" };
    },
    deleteTodoById: (_, { todoInfo }, context) => {
      orchestrator(deleteTodoSteps, context, todoInfo)
        .then(() => {
          console.log("Order Orchestrator finished");
        })
        .catch((error) => {
          console.error("Order Orchestrator encountered an error", error);
        });

      return { message: "Success" };
    },
    updateTodoById: (_, { todo }, context) => {
      var steps = takeTodoSteps;

      switch (true) {
        case todo.isCompleted === true:
          steps = completeTodoSteps;
          break;
        case todo.taken === "":
          steps = leaveTodoSteps;
          break;
        default:
          steps = takeTodoSteps;
          break;
      }

      orchestrator(steps, context, todo)
        .then(() => {
          console.log("Order Orchestrator finished");
        })
        .catch((error) => {
          console.error("Order Orchestrator encountered an error", error);
        });

      return { message: "Success" };
    },
  },
};
