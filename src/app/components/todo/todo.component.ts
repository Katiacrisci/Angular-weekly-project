import { Component, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  title!: string;
  constructor(private service: TodosService) {}
  addTodo(title: string) {
    // this.service.addTodo()
console.log(title)

  }

}
