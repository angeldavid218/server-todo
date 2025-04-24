'use server';
import TodoModel from '../../../models/todo';
import { revalidatePath } from 'next/cache';
async function ToggleTodo(id: string) {
  const todo = await TodoModel.findById(id);
  todo.isCompleted = !todo.isCompleted;
  await todo.save();

  revalidatePath('/', 'layout');
}

export default ToggleTodo;
