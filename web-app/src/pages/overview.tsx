import { useMutation, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { TodoListItem } from "../components/list/todo-list-Item";
import { GET_TODOS, UPDATE_TODO } from "../graphql/quries";
import { Todo } from "../models/todo";

export const Overview = () => {
  const { user } = useAuth0();
  const { data, refetch } = useQuery(GET_TODOS);
  const [updateTodoById] = useMutation(UPDATE_TODO);

  const onTake = async (todo: Todo) => {
    const { ["__typename"]: omitted, ...rest } = todo as any;
    await updateTodoById({
      variables: { todo: { ...rest, taken: user?.sub } },
    });
    refetch();
  };
  const onLeave = async (todo: Todo) => {
    const { ["__typename"]: omitted, ...rest } = todo as any;
    await updateTodoById({ variables: { todo: { ...rest, taken: "" } } });
    refetch();
  };
  const onComplete = async (todo: Todo) => {
    const { ["__typename"]: omitted, ...rest } = todo as any;
    await updateTodoById({
      variables: { todo: { ...rest, isCompleted: true } },
    });
    refetch();
  };

  const available = useMemo(() => {
    {
      return data
        ? (data.getTodos.todos as Todo[]).map((todo, i) =>
            !todo.taken && !todo.isCompleted ? (
              <TodoListItem
                key={i}
                Todo={todo}
                Type={"Available"}
                HandleTakeAction={onTake}
              />
            ) : undefined
          )
        : undefined;
    }
  }, [data]);

  const taken = useMemo(() => {
    {
      return data
        ? (data.getTodos.todos as Todo[]).map((todo, i) =>
            todo.taken && !todo.isCompleted ? (
              <TodoListItem
                key={i}
                Todo={todo}
                Type={"Taken"}
                HandleLeaveAction={onLeave}
                HandleCompleteAction={onComplete}
              />
            ) : undefined
          )
        : undefined;
    }
  }, [data]);

  const completed = useMemo(() => {
    {
      return data
        ? (data.getTodos.todos as Todo[]).map((todo, i) =>
            todo.isCompleted ? (
              <TodoListItem key={i} Todo={todo} Type={null} />
            ) : undefined
          )
        : undefined;
    }
  }, [data]);

  return (
    <div>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Available Todo's
      </Typography>
      {available}
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Taken Todo's
      </Typography>
      {taken}
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Completed Todo's
      </Typography>
      {completed}
    </div>
  );
};
