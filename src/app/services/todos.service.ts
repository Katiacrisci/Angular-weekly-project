import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  constructor() { }

  async delayResponse(fn: Function): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => resolve(fn()), 2000)
    })
  }

  addTodo(newTodoTitle: string): Promise<any> {
    return this.delayResponse(() => {
      let newTodo = {id:this.todos.length + 1, title: newTodoTitle, completed: false}
      this.todos.push(newTodo);
    })
  }

  getTodos(): Promise<any> {
    return this.delayResponse(() => this.todos);
  }

  deleteTodo(todo: Todo): Promise<any> {
    return this.delayResponse(() => {
        let todoIndex: number = this.todos.indexOf(todo);

        if (todoIndex === -1) return;

        this.todos.splice(todoIndex, 1);
    })
  }

}
