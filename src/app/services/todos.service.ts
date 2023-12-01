import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  constructor() { }

  addTodo(newTodoTitle: string) {
    let newTodo = {id:this.todos.length + 1, title: newTodoTitle, completed: false}
    this.todos.push(newTodo);

  }

  getTodos() {
    return this.todos; 
  }

  deleteTodo() {}

}
