import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { SingleTaskComponent } from './main-components/single-task/single-task.component';
import { SingleUserComponent } from './main-components/single-user/single-user.component';
import { HomeComponent } from './pages/home/home.component';
import { DoneComponent } from './pages/done/done.component';
import { UndoneComponent } from './pages/undone/undone.component';
import { AllUserComponent } from './pages/all-user/all-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SingleTaskComponent,
    SingleUserComponent,
    HomeComponent,
    DoneComponent,
    UndoneComponent,
    AllUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
