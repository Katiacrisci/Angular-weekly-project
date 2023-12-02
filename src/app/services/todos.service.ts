import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = JSON.parse(localStorage.getItem("todos")!) ?? [];

  constructor() {
  }

  async delayResponse(fn: Function): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => resolve(fn()), 2000)
    })
  }

  addTodo(newTodoTitle: string): Promise<any> {
    return this.delayResponse(() => {
      let newTodo = {id: this.todos.length + 1, title: newTodoTitle, completed: false}
      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
      return this.todos;
    })
  }

  getTodos(): Promise<any> {
    return this.delayResponse(() => this.todos);
  }

  completeTodo(todo: Todo): Promise<any> {
    return this.delayResponse(() => {
      let todoIndex: number = this.todos.indexOf(todo);

      if (todoIndex === -1) {
        console.error(`Error while trying to mark as completed ${todo}: not found in storage`)
        return;
      }

      this.todos[todoIndex].completed = true;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    })
  }

  deleteTodo(todo: Todo): Promise<any> {
    return this.delayResponse(() => {
      let todoIndex: number = this.todos.indexOf(todo);

      if (todoIndex === -1) {
        console.error(`Error while trying to delete ${todo}: not found in storage`)
        return;
      }

      this.todos.splice(todoIndex, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    })
  }

}
