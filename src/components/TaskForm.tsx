'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import addTodo from '@/app/actions/addTodo';
import updateTodo from '@/app/actions/updateTodo';
import { Todo } from '@/app/types/todo';

interface taskFormProps {
  todo?: Todo;
  onCancel: () => void;
  onSubmitSuccess: () => void;
}

export default function TaskForm({
  todo: initialTodo,
  onCancel,
  onSubmitSuccess,
}: taskFormProps) {
  const [todo, setTodo] = useState<Partial<Todo> | null>(initialTodo || null);

  const handleSubmit = async (formData: FormData) => {
    if (todo?.id) {
      // Update existing todo
      await updateTodo(formData);
    } else {
      // Create new todo
      await addTodo(formData);
    }
    setTodo(null); // Reset form after submission
    onSubmitSuccess();
  };
  return (
    <form
      className="flex items-center text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 p-3 gap-2"
      action={handleSubmit}
    >
      <input type="hidden" name="id" defaultValue={todo?.id} />
      <Input
        className="flex-grow"
        type="text"
        placeholder="Task name"
        name="todo"
        value={todo?.title || ''}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        required
      />
      <Button type="submit">{todo?.id ? 'Update' : 'Add'}</Button>
      <Button type="button" variant="outline" onClick={() => onCancel()}>
        Cancel
      </Button>
    </form>
  );
}
