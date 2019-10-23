import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../../models/todo';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../../components/enum/action.enum';


// INIT TODOS
export class LoadInitTodos implements Action {
  readonly type = ActionTypes.LOAD_INIT_TODOS;
}
export class SuccessInitTodos implements Action {
  readonly type = ActionTypes.SUCCESS_INIT_TODOS;
  constructor(public todo: Todo[]) { }
}

// GET TODOS
export class LoadGetTodos implements Action {
  readonly type = ActionTypes.LOAD_GET_TODOS;
}
export class SuccessGetTodos implements Action {
  readonly type = ActionTypes.SUCCESS_GET_TODOS;
  constructor(public todo: Todo[]) { }
}

// TOGGLE TODO
export class ToggleTodo implements Action {
  readonly type = ActionTypes.TOGGLE_TODO;

  constructor(public todo: Todo) { }
}

// CREATE TODO
export class CreateTodo {
  readonly type = ActionTypes.CREATE_TODO;
  constructor(public todo: Todo) {
    todo.completed = false;
  }
}

// DELETE TODO
export class LoadDeleteTodo implements Action {
  readonly type = ActionTypes.LOAD_DELETE_TODO;
  constructor(public todoId: number) { }
}

export class SuccessDeleteTodo implements Action {
  readonly type = ActionTypes.SUCCESS_DELETE_TODO;
  constructor(public todoId: number) { }
}

// ERROR ACTIONS
export class ErrorLoadAction {
  readonly type = ActionTypes.ERROR_LOAD_ACTION;
  constructor(public payload: Partial<HttpErrorResponse>) { }
}

export type Actions = LoadInitTodos
  | SuccessInitTodos
  | LoadGetTodos
  | SuccessGetTodos
  | ErrorLoadAction
  | ToggleTodo
  | CreateTodo
  | LoadDeleteTodo
  | SuccessDeleteTodo;


