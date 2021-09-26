import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent, data: { tab : 1} },
  {path: 'todos', component: TodosComponent, data: { tab : 2 } },
  {path: 'todos/add', component: AddTodoComponent},
  {path: 'todos/:id', component: EditTodoComponent},
  {path: 'notes', component: NotesComponent, data: { tab : 3 } },
  {path: 'notes/add', component: AddNoteComponent },
  {path: 'notes/:id', component: EditNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
