import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJsonContent } from './Models/i-json-content';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string = "https://dummyjson.com/products"

  constructor(private http:HttpClient){}

  getAllProducts(){
    return this.http.get<IJsonContent>(this.apiUrl)
  }


}
