'use client';
import React from 'react';
import { Pen, X } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import deleteTodo from '@/app/actions/deleteTodo';
import { TodosItemProps } from '@/app/types/todo';

export default function TodoItem({ todos }: TodosItemProps) {
  const handleDeleteTodo = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this?');
    if (!confirmed) {
      return;
    }
    await deleteTodo(id);
  };

  return (
    <>
      {todos.map((todo, idx) => (
        <div
          key={idx}
          className="text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 flex justify-between p-3"
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="todo-element" />
            <label htmlFor="todo-element" className="text-xl cursor-pointer">
              {todo.title}
            </label>
          </div>
          <div className="flex items-center content-center gap-2">
            <Pen className="cursor-pointer" />
            <X
              onClick={() => handleDeleteTodo(todo.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </>
  );
}
