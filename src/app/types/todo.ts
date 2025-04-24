export interface Todo {
  id: string;
  title: string;
  description?: string;
  status?: string;
}

export interface TodosItemProps {
  todos: Todo[];
  getTodoById: (id: string) => Promise<Todo>;
}
