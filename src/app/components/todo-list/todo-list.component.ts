import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todos: Todo[] = [{id: 1, title: "Todo 1", complete: false}, {id: 2, title: "Todo 2", complete: false}, {id: 3, title: "Todo 3", complete: false}];

  createNewPlaceholder: string = "Create new todo";

  addNewTodo(){

    // "So a solution is to cast the result of getElementById() to HTMLInputElement like this:"
    let inputField = (<HTMLInputElement>document.getElementById("new-todo-input"));
    let inputValue = inputField.value;

    if (inputValue.length > 0) {
      let newTodo: Todo = new Todo();
      newTodo.id = this.todos.length + 1;
      newTodo.title = inputValue;
      newTodo.complete = false;

      this.todos.push(newTodo);

      // Resets field value to ""
      inputField.value = "";
    }
  }

  removeTodo(todo: Todo){
    let indexOf: number = this.todos.indexOf(todo);
    if (indexOf != -1) { // -1 will be returned if something goes wrong with the index of todo
      this.todos.splice(indexOf, 1);
    } else {
      alert("Något gick fel, Todon kunde inte tas bort");
    }
  }

  ngOnInit(): void {

  }

}
