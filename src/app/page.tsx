import TodoItem from '@/components/TodoItem';
import { connectDB } from '../../config/database';
import TaskForm from '@/components/TaskForm';
import Todo from '../../models/todo';
const Home = async () => {
  connectDB();
  const todos = await Todo.find({}).lean();

  const mappedTodos = todos.map((todo) => ({
    id: todo._id as string,
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
