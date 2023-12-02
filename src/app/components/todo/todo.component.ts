import {Component} from '@angular/core';
import {TodosService} from '../../services/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  title!: string;
  addButtonInput: HTMLInputElement = document.getElementById("title") as HTMLInputElement;

  constructor(private service: TodosService) {
  }

  addTodo(title: string) {
    this.service.addTodo(title)
      .then(resp => console.log(`Response from addTodo: ${resp}`))
  }

}
