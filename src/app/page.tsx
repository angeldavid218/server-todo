import Todo from '@/components/Todo';
import { connectDB } from '../../config/database';
export default function Home() {
  connectDB();
  return (
    <div className="flex flex-col items-center background mt-4">
      <h1>My todo list using server actions</h1>
      <Todo />
    </div>
  );
}
