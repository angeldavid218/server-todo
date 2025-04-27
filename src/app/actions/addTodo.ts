'use server';
import Todo from '../../../models/todo';
import { revalidatePath } from 'next/cache';
async function addTodo(formData: FormData) {
  try {
    const newTodo = new Todo({
      title: formData.get('todo') as string,
      isCompleted: false,
    });
    // saving using mongoose save function
    await newTodo.save();
  } catch (error) {
    console.error(error);
  }
  // purges the cashed data for the page, it's like refreshing the webpage to get the latest results
  revalidatePath('/', 'layout');
}

export default addTodo;
