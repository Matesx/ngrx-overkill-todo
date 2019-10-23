export * from './actions/todo-list.action';
export * from './reducers/todo-list.reducer';

import * as fromReducer from './reducers/todo-list.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { TodoListState } from '../models/todo';

export interface State {
  todos: TodoListState;
}
export const reducers: ActionReducerMap<State> = {
  todos: fromReducer.todosReducer,
};

