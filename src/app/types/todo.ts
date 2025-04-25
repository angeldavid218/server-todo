export interface Todo {
  id: string;
  title: string;
  isCompleted?: boolean;
}

export interface TodosItemProps {
  todos: Todo[];
  getTodoById: (id: string) => Promise<Todo>;
}

export interface TodoDocument {
  _id: { toString(): string };
  title: string;
  isCompleted: boolean;
}
