import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService} from '../shared/todo.service';
import { Todo } from '../shared/todo.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo: Todo

  constructor(
    private todoService: TodoService, 
    private router: Router, 
    private route:ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id')
      this.todo = this.todoService.getTodo(todoId)
    })
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) return 
    
    this.todoService.updateTodo(this.todo.id, form.value)
    this.router.navigateByUrl("/todos")
    this.notificationService.show('Todo updated!')
  }

}
