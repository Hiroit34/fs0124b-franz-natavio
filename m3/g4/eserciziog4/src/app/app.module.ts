import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostComponent } from './active-post/active-post.component';
import { InactivePostComponent } from './inactive-post/inactive-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostComponent,
    InactivePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
