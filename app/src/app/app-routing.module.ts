import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {
    path: '',
    component: CarListComponent,
  },
  {
    path: ':id',
    component: CarDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
