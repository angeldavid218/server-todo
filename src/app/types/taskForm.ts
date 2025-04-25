import { Todo } from './todo';

export interface taskFormProps {
  todo?: Todo;
  onCancel: () => void;
  onSubmitSuccess: () => void;
}
