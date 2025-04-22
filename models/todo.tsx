import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
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

const TodoModel = models.Todo || model('Todo', todoSchema);

export default TodoModel;
