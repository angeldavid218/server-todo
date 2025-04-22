import TodoItem from '@/components/TodoItem';
import { connectDB } from '../../config/database';
import TaskForm from '@/components/TaskForm';
import TodoModel from '../../models/todo';
import { Todo } from './types/todo';
const Home = async () => {
  connectDB();

  // using type assertion
  const todos = (await TodoModel.find({}).lean()) as unknown as {
    _id: { toString(): string };
    title: string;
    description?: string;
    status: string;
  }[];

  const mappedTodos: Todo[] = todos.map((todo) => ({
    id: todo._id.toString(),
    title: todo.title,
    description: todo.description,
    status: todo.status,
  }));

  return (
    <div className="flex flex-col items-center background mt-4">
      <h1>My todo list using server actions</h1>
      <TaskForm />
      <TodoItem todos={mappedTodos} />
    </div>
  );
};

export default Home;
