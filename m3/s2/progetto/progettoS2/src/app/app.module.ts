import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { HomeComponent } from './pages/home/home.component';
import { RemainingComponent } from './pages/remaining/remaining.component';
import { DoneComponent } from './pages/done/done.component';

import { AllUserComponent } from './pages/all-user/all-user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTaskComponent,
    SingleUserComponent,
    HomeComponent,
    RemainingComponent,
    DoneComponent,
    AllUserComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
