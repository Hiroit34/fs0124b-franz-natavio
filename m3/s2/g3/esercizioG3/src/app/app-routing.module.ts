import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "favorite",
    component: FavoriteComponent
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
