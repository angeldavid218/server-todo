'use client';
import React, { useState } from 'react';
import { Pen, X } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import deleteTodo from '@/app/actions/deleteTodo';
import { Todo, TodosItemProps } from '@/app/types/todo';
import TaskForm from './TaskForm';
import { Button } from './ui/button';
import ToggleTodo from '@/app/actions/toggleTodo';

export default function ListTodo({ todos, getTodoById }: TodosItemProps) {
  // editingTodo state is used to store the todo being edited
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  // showForm state is used to control the visibility of the TaskForm component once we click on the add button
  const [showForm, setShowForm] = useState(false);
  // handleDeleteTodo is used to delete a todo
  const handleDeleteTodo = async (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this?');
    if (!confirmed) {
      return;
    }
    await deleteTodo(id);
  };
  // handleEdit is used to edit the current todo on the TaskForm component
  const handleEdit = async (id: string) => {
    // this function is used to call a function on the parent component (page.tsx)
    // as it is a server component we can use it to make the query on the database
    const todo = await getTodoById(id);
    setEditingTodo(todo);
    setShowForm(true);
  };

  // handleCheckboxClick is used to toggle the completion status of a todo
  const handleCheckboxClick = async (id: string) => {
    await ToggleTodo(id);
  };

  return (
    <>
      {showForm ? (
        <TaskForm
          todo={editingTodo ?? undefined}
          onCancel={() => {
            // reset the editingTodo state and hide the form
            setEditingTodo(null);
            setShowForm(false);
          }}
          onSubmitSuccess={() => setShowForm(false)}
        />
      ) : (
        <Button onClick={() => setShowForm(true)} className="mb-4 mt-4">
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
              checked={todo.isCompleted}
              onClick={() => handleCheckboxClick(todo.id)}
            />
            <label
              htmlFor="todo-element"
              className={`text-xl cursor-pointer ${
                todo.isCompleted ? 'line-through' : ''
              }`}
            >
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
