import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './containers/todo-list/models/todo';
import { Store, select } from '@ngrx/store';
import { State } from '../app/containers/todo-list/store';
import * as fromSelector from '../app/containers/todo-list/store/selectors/todo-list.selector';
import * as fromAction from '../app/containers/todo-list/store/actions/todo-list.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todosInit$: Observable<Todo[]>;

  constructor(
    private store: Store<State>,
  ) {
    this.todosInit$ = store.pipe(
      select(fromSelector.selectTodos$)
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromAction.LoadInitTodos());
  }

}
