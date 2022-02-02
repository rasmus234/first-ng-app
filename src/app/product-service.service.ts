import { Injectable } from '@angular/core';
import {Product} from "./product-list/product-list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [
    {id: 1, name: "Product 1", price: 100},
    {id: 2, name: "Product 2", price: 200},
    {id: 3, name: "Product 3", price: 300},
  ];

  public getAll():Array<Product> {

    return this.products;
  }
  public updateProduct(index:number, product: Product):Array<Product> {

    this.products[index] = product;
    return this.products;
  }

  public deleteProduct(index:number):Array<Product> {

    this.products = this.products.filter(product => product.id !== index);
    return this.products;
  }

  public addProduct(product: Product):Array<Product> {

    this.products.push(product);
    return this.products;
  }

  constructor() { }
}
