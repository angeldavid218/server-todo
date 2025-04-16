import React from 'react';
import { Pen } from 'lucide-react';
import { X } from 'lucide-react';
import { Checkbox } from './ui/checkbox';

export default function Todo() {
  return (
    <div className="text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 flex justify-between p-3">
      <div className="flex items-center content-center  space-x-2">
        <Checkbox id="todo-element" />
        <label htmlFor="todo-element" className="text-xl">
          My todo element
        </label>
      </div>
      <div className="flex gap-2 items-center content-center">
        <Pen className="cursor-pointer" />
        <X className="cursor-pointer" />
      </div>
    </div>
  );
}
