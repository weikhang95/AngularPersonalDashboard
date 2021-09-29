import { Injectable, OnDestroy } from '@angular/core';
import { Todo } from './todo.model';
import { fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todos: Todo[] = []

  storageListenSub: Subscription


  constructor() {
    this.loadState()

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: StorageEvent) => {
        if (event.key == 'todos') this.loadState()
      })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }


  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)

    this.saveState()
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedTodoFields)

    this.saveState()
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if (index == -1) return

    this.todos.splice(index, 1)

    this.saveState()
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadState() {
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos'))


      if (!todosInStorage) return

      this.todos.length = 0; // Clear the todos array while keeping the references
      this.todos.push(...todosInStorage)

    } catch (e) {
      console.log('There was an error retrieving the todos form local storage')
      console.log(e)
    }
  }
}
