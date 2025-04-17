import TodoItem from '@/components/TodoItem';
import { connectDB } from '../../config/database';
import TaskForm from '@/components/TaskForm';
export default function Home() {
  connectDB();
  return (
    <div className="flex flex-col items-center background mt-4">
      <h1>My todo list using server actions</h1>
      <TaskForm />
      <TodoItem />
    </div>
  );
}
