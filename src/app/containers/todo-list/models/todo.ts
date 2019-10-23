import { StateEnum } from '../components/enum/state.enum';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoListState {
  data: Todo[];
  state: StateEnum;
}
