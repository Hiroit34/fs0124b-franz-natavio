import { Component } from '@angular/core';
import { IProducts } from '../Models/i-products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: IProducts[] = []

  constructor(private productsSvc:ProductsService){}

  ngOnInit(){
    this.productsSvc.getAllProducts().subscribe(p => {
      this.products = p.products
    })

    console.log(this.products);

  }


}
