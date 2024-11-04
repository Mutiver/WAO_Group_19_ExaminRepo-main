import { DataSourceContext } from "../types/graphql/context";

export interface BaseStep<T> {
  action: (context: DataSourceContext, object: T) => Promise<void>;
  compensation: (context: DataSourceContext, object: T) => Promise<void>;
}
