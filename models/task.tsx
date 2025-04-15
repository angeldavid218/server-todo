import { Schema, models, model } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
});
