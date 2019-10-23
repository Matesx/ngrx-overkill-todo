import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../../store';

// get todos
export const selectTodoListState$ = (state: State) => state.todos;

// get data of todo
export const selectTodos$ = createSelector(selectTodoListState$, (todos) => todos.data);

