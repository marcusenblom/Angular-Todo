import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  removeMe(){
    this.remove.emit(this.todo);
  }

  changeStatus(){
    this.todo.complete = !this.todo.complete;
  }

  ngOnInit(): void {
  }

}
