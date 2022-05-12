import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeaveComponent } from './components/add-leave/add-leave.component';
import { DetailsLeaveComponent } from './components/details-leave/details-leave.component';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view-leave',
  },
  {
    path: 'add-leave',
    component: AddLeaveComponent,
  },
  {
    path: 'view-leave',
    component: ViewLeaveComponent,
  },
  {
    path: 'edit-leave',
    component: DetailsLeaveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
