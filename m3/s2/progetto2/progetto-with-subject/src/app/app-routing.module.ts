import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoneComponent } from './pages/done/done.component';
import { UndoneComponent } from './pages/undone/undone.component';
import { AllUserComponent } from './pages/all-user/all-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
  {
    path: 'undone',
    component: UndoneComponent,
  },
  {
    path: 'all-user',
    component: AllUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
