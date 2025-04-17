import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: false,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
});

const Task = model('tasks', taskSchema);

export default Task;
