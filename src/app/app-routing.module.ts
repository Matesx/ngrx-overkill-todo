import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './containers/todo-list/components/todo-list/todo-list.component';
import { TodoDetailComponent } from './containers/todo-list/components/todo-detail/todo-detail.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos/:todoId', component: TodoDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
