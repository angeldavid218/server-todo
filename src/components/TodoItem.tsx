import React from 'react';
import { Pen, X } from 'lucide-react';
import { Checkbox } from './ui/checkbox';

export default function TodoItem() {
  return (
    <div className="text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 flex justify-between p-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="todo-element" />
        <label htmlFor="todo-element" className="text-xl cursor-pointer">
          My todo element
        </label>
      </div>
      <div className="flex items-center content-center gap-2">
        <Pen className="cursor-pointer" />
        <X className="cursor-pointer" />
      </div>
    </div>
  );
}
