import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/todo-list.action';
import { TodoListService } from '../../../../services/todo-list.service';
import { ActionTypes } from '../../components/enum/action.enum';

@Injectable()
export class TodoListEffect {

  @Effect() LoadTodos$: Observable<fromAction.Actions> = this.actions$
    .pipe(
      ofType<fromAction.LoadInitTodos>(ActionTypes.LOAD_INIT_TODOS),
      switchMap(action => this.todoListService.getTodos()),
      map(todos => new fromAction.SuccessInitTodos(todos)),
      catchError((err) => of(new fromAction.ErrorLoadAction(err)))
    );

  @Effect() LoadGetTodos$: Observable<fromAction.Actions> = this.actions$
    .pipe(
      ofType<fromAction.LoadGetTodos>(ActionTypes.LOAD_GET_TODOS),
      switchMap(action => this.todoListService.getTodos()),
      map(todos => new fromAction.SuccessGetTodos(todos)),
      catchError((err) => of(new fromAction.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteTodo$: Observable<fromAction.Actions> = this.actions$
    .pipe(
      ofType<fromAction.LoadDeleteTodo>(ActionTypes.LOAD_DELETE_TODO),
      switchMap(action => this.todoListService.deleteTodo(action.todoId)),
      map(id => new fromAction.SuccessDeleteTodo(id)),
      catchError((err) => of(new fromAction.ErrorLoadAction(err)))
    );

  constructor(
    private todoListService: TodoListService,
    private actions$: Actions
  ) { }
}
