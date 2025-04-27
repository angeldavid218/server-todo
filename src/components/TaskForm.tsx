'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import addTodo from '@/app/actions/addTodo';
import updateTodo from '@/app/actions/updateTodo';
import { Todo } from '@/app/types/todo';
import { taskFormProps } from '@/app/types/taskForm';

export default function TaskForm({
  todo: initialTodo,
  onCancel,
  onSubmitSuccess,
}: taskFormProps) {
  const [todo, setTodo] = useState<Partial<Todo> | null>(initialTodo || null);

  const handleSubmit = async (formData: FormData) => {
    if (todo?.id) {
      //Server action to update existing todo
      await updateTodo(formData);
    } else {
      //Server action to create new todo
      await addTodo(formData);
    }
    setTodo(null); // Reset form after submission
    // function to call the parent component to update the state of the todos once the form is submitted
    onSubmitSuccess();
  };
  return (
    <form
      className="flex items-center text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 p-3 gap-2"
      action={handleSubmit}
    >
      {/* hidden input for the id to send it to the action in the case we have the id like we used to do with php :)  */}
      <input type="hidden" name="id" defaultValue={todo?.id} />
      <Input
        className="flex-grow"
        type="text"
        placeholder="Task name"
        name="todo"
        defaultValue={todo?.title || ''}
        required
      />
      <Button type="submit">{todo?.id ? 'Update' : 'Add'}</Button>
      <Button type="button" variant="outline" onClick={() => onCancel()}>
        Cancel
      </Button>
    </form>
  );
}
