import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataServices} from "../services/data.services";
import {CategoryInterface} from "../models/category";
import {CategoryProductsInterface} from "../models/category-products";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private dataService:DataServices
  ) { }
  searchedCategory = "";

  matchesSearch: CategoryInterface[] | null = null;

  index: number | undefined;

  categories: CategoryInterface[] = [];

  selectedCategory!: CategoryInterface;

  categoryProducts!: CategoryProductsInterface;

  ngOnInit(): void {
    this.getCategories().then(async (action) => {
      this.index = this.route.snapshot.params['categoria'];
      if (this.index != undefined)
        await this.getSelectedCategoryProducts(this.index).then((rs) => {
          this.selectedCategory = this.categoryProducts.category;
        });
    });
  }

  async getCategories() {
    await this.dataService.getCategories().then((response) => this.categories = response);
  }

  cleanSelectedCategory() {
    this.router.navigate(['catalogo']).then(r => this.categories = []);
  }

  async getSelectedCategoryProducts(id: number){
    await this.dataService.getCategoryProducts(id).then((response: CategoryProductsInterface) => this.categoryProducts = response);
  }

  filterCategories() {
    this.matchesSearch = [];
    this.categories.forEach(
      (category)=>{
        const lowerCategory = category.name.toLowerCase();
        if (lowerCategory.includes(this.searchedCategory.toLowerCase())){
          this.matchesSearch?.push(category)
        }
      }
    );
  }
}
