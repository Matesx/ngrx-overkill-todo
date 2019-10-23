import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import * as fromAction from '../../store/actions/todo-list.action';
import * as fromSelector from '../../store/selectors/todo-list.selector';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  title = 'Overkill Todo Project';
  todos$: Observable<Todo[]>;
  todoForm: FormGroup;

  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder,
  ) {
    this.todos$ = store.pipe(
      select(fromSelector.selectTodos$)
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromAction.LoadGetTodos());
    this.initForm();
  }

  private initForm() {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ''
    });
  }

  onToggle(todo: Todo) {
    this.store.dispatch(new fromAction.ToggleTodo(todo));
  }

  onDelete(id: number) {
    this.store.dispatch(new fromAction.LoadDeleteTodo(id));
  }

  onCreateTodo(todo: Todo) {
    this.store.dispatch(new fromAction.CreateTodo(todo));
  }

  onSubmit(todoData: Todo) {
    this.onCreateTodo(todoData);
    this.todoForm.reset();
  }

}
