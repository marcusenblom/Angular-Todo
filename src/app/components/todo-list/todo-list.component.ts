import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todos: Todo[] = [{id: 1, title: "Snooze u lose", complete: false}, {id: 2, title: "Brush them teeth", complete: false}, {id: 3, title: "Pancakes for tomorrow", complete: false}];

  addNewTodo(titleFromInput: string){

    if (titleFromInput.length > 0) {
      let newTodo: Todo = new Todo(this.todos.length + 1, titleFromInput, false);
      this.todos.push(newTodo);

      // Resets field value to ""
      let inputField = (<HTMLInputElement>document.getElementById("new-todo-input"));
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

  sorted: boolean = false;
  sortTodos() {
    if (!this.sorted) {
      this.todos.sort((a: Todo,b: Todo) => a.title.localeCompare(b.title));
      this.sorted = true;
    } else {
      this.todos.sort((a: Todo,b: Todo) => b.title.localeCompare(a.title));
      this.sorted = false;
    }
  }

  ngOnInit(): void {
  }

}
