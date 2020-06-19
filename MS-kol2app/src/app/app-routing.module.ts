import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MSForumComponent} from './ms-forum/ms-forum.component';
import {MSForumDetailsComponent} from './ms-forum-details/ms-forum-details.component';


const routes: Routes = [
  {
    path: '',
    component: MSForumComponent,
  },
  {
    path: 'post/:id',
    component: MSForumDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
