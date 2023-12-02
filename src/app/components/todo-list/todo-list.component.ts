import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodosService} from '../../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;

  constructor(private service: TodosService) {
  }

  ngOnInit(): void {
    console.log("Init works!")
    this.service.getTodos()
      .then((resp: Todo[]) => {
        this.todos = resp.filter(t => !t.completed);
        console.log(this.todos)
        this.loading = false;
      });
  }

}
