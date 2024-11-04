export interface Todo {
  id: string;
  taken: string;
  title: string;
  userId: string;
  description: string;
  isCompleted: boolean;
  price: number;
}

export interface TodoInput {
  title: string;
  description: string;
  price: number;
}

export interface TodoIdInput {
  title: string;
}



