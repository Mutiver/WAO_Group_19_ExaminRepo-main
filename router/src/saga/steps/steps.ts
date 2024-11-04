import {
  TodoDeleteInput,
  TodoInput,
  TodoUpdateInput,
} from "../../types/graphql/graphql";
import { BaseStep } from "../step-base";
import { CompleteAccountingStep } from "./accounting/complete-accounting-step";
import { CreateAccountingStep } from "./accounting/create-accounting-step";
import { DeleteAccountingStep } from "./accounting/delete-accounting-step";
import { CompleteAnalyticsStep } from "./analytics/complete-analytics-step";
import { CreateAnalyticsStep } from "./analytics/create-analytics-step";
import { DeleteAnalyticsStep } from "./analytics/delete-analytics-step";
import { CompleteBankStep } from "./bank/complete-bank-step";
import { CreateBankStep } from "./bank/create-bank-step";
import { DeleteBankStep } from "./bank/delete-bank-step";
import { CreateTodoStep } from "./todo/create-todo-step";
import { DeleteTodoStep } from "./todo/delete-todo-step";
import { UpdateTodoStep } from "./todo/update-todo-step";

export const createTodoSteps: BaseStep<TodoInput>[] = [
  CreateTodoStep,
  CreateAnalyticsStep,
  CreateAccountingStep,
  CreateBankStep,
];
export const deleteTodoSteps: BaseStep<TodoDeleteInput>[] = [
  DeleteTodoStep,
  DeleteAnalyticsStep,
  DeleteAccountingStep,
  DeleteBankStep,
];
export const takeTodoSteps: BaseStep<TodoUpdateInput>[] = [UpdateTodoStep];
export const leaveTodoSteps: BaseStep<TodoUpdateInput>[] = [UpdateTodoStep];
export const completeTodoSteps: BaseStep<TodoUpdateInput>[] = [
  UpdateTodoStep,
  CompleteAnalyticsStep,
  CompleteAccountingStep,
  CompleteBankStep,
];
