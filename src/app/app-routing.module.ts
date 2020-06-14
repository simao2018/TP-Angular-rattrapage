import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import {FourComponent} from "./four/four.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'', component: LoginComponent},
  { path:'list', component: ListComponent },
  { path:'not-found', component: FourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
