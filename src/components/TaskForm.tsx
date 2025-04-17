import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function TaskForm() {
  return (
    <div className="flex items-center text-3xl bg-white w-1/2 rounded-sm mt-4 h-13 p-3 gap-2">
      <Input className="flex-grow" type="text" placeholder="Task name" />
      <Button>Submit</Button>
    </div>
  );
}
