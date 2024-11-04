import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query Query {
    getTodos {
      todos {
        id
        title
        description
        isCompleted
        taken
        price
        userId
      }
    }
  }
`;

export const GET_ACCOUNTING = gql`
  query Transactions {
    getAccounting {
      Transactions {
        id
        from
        to
        amount
      }
    }
  }
`;

export const GET_ANALYTICS = gql`
  query Query {
    getAnalytics {
      numberOfTodos
      numberOfTransactions
    }
  }
`;

export const CREATE_TODO = gql`
  mutation Mutation($todo: TodoInput!) {
    createTodo(todo: $todo) {
      message
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodoById($todoInfo: TodoDeleteInput!) {
    deleteTodoById(todoInfo: $todoInfo) {
      message
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation Mutation($todo: TodoUpdateInput!) {
    updateTodoById(todo: $todo) {
      message
    }
  }
`;
