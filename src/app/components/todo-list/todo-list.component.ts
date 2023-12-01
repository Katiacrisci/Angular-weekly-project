import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: Todo[] = [];
  constructor(private service: TodosService) {
   this.todos = service.getTodos();
   

  }
  

}
