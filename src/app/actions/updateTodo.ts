'use server';
import Todo from '../../../models/todo';
import { revalidatePath } from 'next/cache';

async function updateTodo(formData: FormData) {
  try {
    const id = formData.get('id');
    const title = formData.get('todo');
    await Todo.findByIdAndUpdate(id, { title });
  } catch (error) {
    console.error(error);
  }

  revalidatePath('/', 'layout');
}

export default updateTodo;
