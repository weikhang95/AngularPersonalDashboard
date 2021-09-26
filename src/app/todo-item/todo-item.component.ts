import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model'; 
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo

  @Output() editClick: EventEmitter<void> = new EventEmitter()
  @Output() deleteClick: EventEmitter<void> = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onEditClick(){
    this.editClick.emit();
  }

  onDeleteClick(){
    this.deleteClick.emit();
  }

}
