import { useMutation, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { TodoListItem } from "../components/list/todo-list-Item";
import { CREATE_TODO, DELETE_TODO, GET_TODOS } from "../graphql/quries";
import { Todo, TodoInput } from "../models/todo";

export const Create = () => {
  const [createTodo, { data, loading, error }] = useMutation(CREATE_TODO);
  const { data: todos, refetch } = useQuery(GET_TODOS);
  const { user } = useAuth0();
  const [deleteTodoById] = useMutation(DELETE_TODO);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDelete = async (todo: Todo) => {
    await deleteTodoById({
      variables: { todoInfo: { id: todo.id, price: todo.price } },
    });
    refetch();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      formData.price.trim() === "" ||
      isNaN(Number(formData.price))
    ) {
      console.error("Please fill out all fields correctly.");
      return;
    }

    const todo: TodoInput = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
    };

    createTodo({ variables: { todo } });

    setFormData({
      title: "",
      description: "",
      price: "",
    });
  };

  const owned = useMemo(() => {
    {
      return todos
        ? (todos.getTodos.todos as Todo[]).map((todo, i) =>
            todo.userId === user?.sub && !todo.taken && !todo.isCompleted ? (
              <TodoListItem
                key={i}
                Todo={todo}
                Type={"Delete"}
                HandleDeleteAction={onDelete}
              />
            ) : undefined
          )
        : undefined;
    }
  }, [todos]);

  return (
    <Box>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Create new Todo
      </Typography>
      <Card sx={{ marginBottom: 1, backgroundColor: "#E8EEF1", pt: 2 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ p: 2 }}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Card>
      {error && <Typography color="error">{error.message}</Typography>}
      {data && <Typography>{data.createTodo.message}</Typography>}

      <Typography sx={{ fontSize: 20, fontWeight: "bold", my: 2 }}>
        Owned Todo's
      </Typography>
      {owned}
    </Box>
  );
};
