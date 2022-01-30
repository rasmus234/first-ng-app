import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ["id","name","price"]
  products: Product[] = [
    {id: 1, name: "Product 1", price: 100},
    {id: 2, name: "Product 2", price: 200},
    {id: 3, name: "Product 3", price: 300},
  ]

  @ViewChild
  (MatTable) table: MatTable<Product> | undefined;

  addProduct(){
    this.products.push({id: 4, name: "Product 4", price: 400})
    console.log(this.products)
    this.table?.renderRows()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  name: string;
  price: number;
}
