'use server';
import Todo from '../../../models/todo';
import { revalidatePath } from 'next/cache';
async function addTodo(formData: FormData) {
  try {
    const newTodo = new Todo({
      title: formData.get('todo') as string,
    });
    await newTodo.save();
  } catch (error) {
    console.error(error);
  }

  revalidatePath('/', 'layout');
}

export default addTodo;
