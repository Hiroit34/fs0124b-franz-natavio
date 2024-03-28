import { ProductsService } from '../../services/products.service';
import { Product } from './../../interfaces/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  product!: Product[]

  constructor(private productSvc: ProductsService){}

  ngOnInit(){
    this.productSvc.getAllProducts().subscribe(p => this.product = p)
  }
}
