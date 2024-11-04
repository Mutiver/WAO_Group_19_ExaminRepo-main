import { DataSourceContext } from "../types/graphql/context";
import { BaseStep } from "./step-base";

export const orchestrator = async <T>(
  steps: BaseStep<T>[],
  context: DataSourceContext,
  object: T
): Promise<void> => {
  const executedSteps: BaseStep<T>[] = [];
  try {
    for (const step of steps) {
      await step.action(context, object);
      executedSteps.push(step);
    }
    console.log("Saga completed successfully");
  } catch (error) {
    console.error("Saga failed, compensating actions will be executed", error);
    for (const step of executedSteps.reverse()) {
      await step.compensation(context, object);
    }
  }
};
