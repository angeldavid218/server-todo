import TodoItem from '@/components/TodoItem';
import { connectDB } from '../../config/database';
import TodoModel from '../../models/todo';
import { Todo } from './types/todo';
const Home = async () => {
  connectDB();

  // using type assertion
  const todos = (await TodoModel.find({}).lean()) as unknown as {
    _id: { toString(): string };
    title: string;
    isCompleted: boolean;
  }[];

  const mappedTodos: Todo[] = todos.map((todo) => ({
    id: todo._id.toString(),
    title: todo.title,
    isCompleted: todo.isCompleted,
  }));

  const getTodoById = async (id: string) => {
    'use server';
    const todo = (await TodoModel.findById(id).lean()) as unknown as {
      _id: { toString(): string };
      title: string;
      isCompleted: boolean;
    };

    return {
      id: todo._id.toString(),
      title: todo.title,
      isCompleted: todo.isCompleted,
    };
  };

  return (
    <div className="flex flex-col items-center background mt-4">
      <h1>My todo list using server actions</h1>
      <TodoItem todos={mappedTodos} getTodoById={getTodoById} />
    </div>
  );
};

export default Home;
