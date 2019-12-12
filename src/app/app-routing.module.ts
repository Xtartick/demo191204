import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDemoComponent } from './component-demo/component-demo.component';


const routes: Routes = [
  { path: 'demo', component: ComponentDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
