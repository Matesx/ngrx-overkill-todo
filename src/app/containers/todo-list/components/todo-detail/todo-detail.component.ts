import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import * as fromSelector from '../../store/selectors/todo-list.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  todos: Todo[]; // to get todos before filter

  todos$: Observable<Todo[]>;

  constructor(private route: ActivatedRoute, private location: Location, private store: Store<State>) {
    this.todos$ = store.pipe(
      select(fromSelector.selectTodos$)
    );

  }

  ngOnInit() {
    this.todos$.subscribe(todos => this.todos = todos);
    this.getTodo();
  }

  private getTodo() {
    this.route.paramMap.subscribe(params => {
      const todoIdString = params.get('todoId');
      const todoId = Number(todoIdString);
      this.todo = this.todos.find(todo => todo.id === todoId);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
