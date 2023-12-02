import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import {MainComponent} from "./components/main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    MainComponent,
    TodoListComponent,
    TodoDetailComponent,
    CompletedTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
