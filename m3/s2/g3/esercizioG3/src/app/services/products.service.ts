import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from '../interfaces/product';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = "https://dummyjson.com/products" //Inseriamo la api in una variabile

  constructor(private productsSvc:HttpClient){}

  getAllProducts(){
    return this.productsSvc.get<Root>(this.url)
    .pipe(map(r => r.products))
  }




}
