'use server';
import { revalidatePath } from 'next/cache';
import Todo from '../../../models/todo';
async function deleteTodo(id: string) {
  try {
    await Todo.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
  }

  revalidatePath('/', 'layout');
}

export default deleteTodo;
