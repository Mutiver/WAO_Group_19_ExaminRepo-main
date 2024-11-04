import { Todo } from "./graphql";

export type DataSourceContext = {
  user: string;
  todo: Todo;
  todoId: string;
  recordId: string;
  dataSources: {
    //  ^        ^
  };
};
