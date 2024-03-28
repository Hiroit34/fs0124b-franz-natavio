import { Product } from './../../interfaces/product';
import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {

  @Input() product!:Product

  constructor(private productSvc:ProductsService){}

  addToCart(product:Product){

  }
  addToFavs(product:Product){

  }

  isFav(id:number) {
   }

}
