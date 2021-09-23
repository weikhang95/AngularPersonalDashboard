import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarksComponent, data: { tab : 1} },
  {path: 'todos', component: TodosComponent, data: { tab : 2 } },
  {path: 'notes', component: NotesComponent, data: { tab : 3 } },
  {path: 'notes/add', component: AddNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
