import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ["id","name","price","removeItem"]

  @ViewChild
  (MatTable) table?: MatTable<Product>;

  addProduct(){
    this.productService.addProduct({id: 4, name: "Product 4", price: 400})
    this.table?.renderRows()
  }

  constructor(public productService:ProductServiceService) { }

  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  name: string;
  price: number;
}
