import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompletedTodosComponent} from "./components/completed-todos/completed-todos.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: 'todos', component: MainComponent},
  {path: 'done', component: CompletedTodosComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
