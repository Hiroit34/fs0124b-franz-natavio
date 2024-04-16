import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFilmsRoutingModule } from './all-films-routing.module';
import { AllFilmsComponent } from './all-films.component';


@NgModule({
  declarations: [
    AllFilmsComponent
  ],
  imports: [
    CommonModule,
    AllFilmsRoutingModule
  ]
})
export class AllFilmsModule { }
