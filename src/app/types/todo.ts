export interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted?: boolean;
}

export interface TodosItemProps {
  todos: Todo[];
  getTodoById: (id: string) => Promise<Todo>;
}
