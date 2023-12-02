import {Component, Input} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  @Input() todo!: Todo;
  @Input() completedMode!: boolean;

  constructor(private todoService: TodosService) {
  }

  markCompleted() {
    this.todoService.completeTodo(this.todo).then(console.log)
  }

  delete() {
    this.todoService.deleteTodo(this.todo).then(console.log)
  }
}
