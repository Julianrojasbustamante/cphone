import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataServices} from "../services/data.services";
import {ProductInterface} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index: number | undefined;
  selectedProduct!: ProductInterface;
  cantidad = 1;
  constructor(
    private route:ActivatedRoute,
    private dataService:DataServices
  ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.getProduct();
  }

  getProduct() {
    if (this.index != undefined)
      this.dataService.getProduct(this.index).then((product:ProductInterface) => this.selectedProduct = product);
  }
}
