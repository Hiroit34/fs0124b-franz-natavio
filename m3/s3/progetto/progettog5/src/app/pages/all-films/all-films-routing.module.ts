import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilmsComponent } from './all-films.component';

const routes: Routes = [{ path: '', component: AllFilmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFilmsRoutingModule { }
