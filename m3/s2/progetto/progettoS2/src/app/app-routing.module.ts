import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoneComponent } from './pages/done/done.component';
import { RemainingComponent } from './pages/remaining/remaining.component';
import { AllUserComponent } from './pages/all-user/all-user.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"done", component: DoneComponent},
  {path:"remaining", component: RemainingComponent},
  {path:"all-user", component: AllUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
