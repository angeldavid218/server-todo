'use client';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import addTodo from '@/app/actions/addTodo';
export default function TaskForm() {
  return (
    <form
      className="flex items-center text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 p-3 gap-2"
      action={addTodo}
    >
      <Input
        className="flex-grow"
        type="text"
        placeholder="Task name"
        name="todo"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
