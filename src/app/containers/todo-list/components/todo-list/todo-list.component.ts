import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import * as fromAction from '../../store/actions/todo-list.action';
import * as fromSelector from '../../store/selectors/todo-list.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  title = 'Overkill Todo - Project';
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<State>
  ) {
    this.todos$ = store.pipe(
      select(fromSelector.selectTodos$)
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromAction.LoadGetTodos());
  }

}
