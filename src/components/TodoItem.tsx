'use client';
import React, { useState } from 'react';
import { Pen, X } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import deleteTodo from '@/app/actions/deleteTodo';
import { Todo, TodosItemProps } from '@/app/types/todo';
import TaskForm from './TaskForm';
import { Button } from './ui/button';
import ToggleTodo from '@/app/actions/toggleTodo';
export default function TodoItem({ todos, getTodoById }: TodosItemProps) {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [showForm, setShowForm] = useState(false);
  const handleDeleteTodo = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this?');
    if (!confirmed) {
      return;
    }
    await deleteTodo(id);
  };

  const handleEdit = async (id: string) => {
    const todo = await getTodoById(id);
    setEditingTodo(todo);
    setShowForm(true);
  };

  const handleCheckboxClick = async (id: string) => {
    await ToggleTodo(id);
  };

  return (
    <>
      {showForm ? (
        <TaskForm
          todo={editingTodo ?? undefined}
          onCancel={() => {
            setEditingTodo(null);
            setShowForm(false);
          }}
          onSubmitSuccess={() => setShowForm(false)}
        />
      ) : (
        <Button onClick={() => setShowForm(true)} className="mb-4">
          Add New Task
        </Button>
      )}
      {todos.map((todo, idx) => (
        <div
          key={idx}
          className="text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 flex justify-between p-3"
        >
          <div className="flex items-center space-x-2">
            <Checkbox
              id={todo.id}
              checked={todo.isCompleted === true}
              onClick={() => handleCheckboxClick(todo.id)}
            />
            <label htmlFor="todo-element" className="text-xl cursor-pointer">
              {todo.title}
            </label>
          </div>
          <div className="flex items-center content-center gap-2">
            <Pen
              onClick={() => handleEdit(todo.id)}
              className="cursor-pointer"
            />
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
