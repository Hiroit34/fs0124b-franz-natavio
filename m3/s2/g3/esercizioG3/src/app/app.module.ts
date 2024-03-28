import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { CartComponent } from './main-components/cart/cart.component';
import { SingleProductComponent } from './main-components/single-product/single-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
