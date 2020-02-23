import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCarComponent} from './create-car/create-car.component';
import {ListCarComponent} from './list-car/list-car.component';
import {DetailCarComponent} from './detail-car/detail-car.component';


const routes: Routes = [
  {path: '', component: ListCarComponent},
  {path: 'car/:id', component: DetailCarComponent},
  {path: 'create', component: CreateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
