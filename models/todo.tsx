import { Schema, model, models } from 'mongoose';
import { connectDB } from '../config/database';

const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  creationDate: {
    type: Date,
    required: false,
  },
});

connectDB();
const TodoModel = models?.Todo || model('Todo', todoSchema);

export default TodoModel;
