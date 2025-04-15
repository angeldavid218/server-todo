import Todo from '@/components/Todo';
import { connectDB } from '../../config/database';
export default function Home() {
  connectDB();
  return (
    <div className="flex justify-center background">
      <Todo />
    </div>
  );
}
