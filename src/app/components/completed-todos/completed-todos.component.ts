import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrl: './completed-todos.component.scss'
})
export class CompletedTodosComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;

  constructor(private service: TodosService) {
  }

  ngOnInit(): void {
    console.log("Init works!")
    this.service.getTodos()
      .then((resp: Todo[]) => {
        this.todos = resp.filter(t => t.completed);
        console.log(this.todos)
        this.loading = false;
      });
  }

}
