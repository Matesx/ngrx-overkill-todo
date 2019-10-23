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
  constructor(public todo: Todo[]) {}
}

// GET TODOS
export class LoadGetTodos implements Action {
  readonly type = ActionTypes.LOAD_GET_TODOS;
}
export class SuccessGetTodos implements Action {
  readonly type = ActionTypes.SUCCESS_GET_TODOS;
  constructor(public todo: Todo[]) {}
}

// ERROR ACTIONS
export class ErrorLoadAction {
  readonly type = ActionTypes.ERROR_LOAD_ACTION;
  constructor(public payload: Partial<HttpErrorResponse>) {}
}

export type Actions = LoadInitTodos
  | SuccessInitTodos
  | LoadGetTodos
  | SuccessGetTodos
  | ErrorLoadAction;


