import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ProductInterface} from "../models/product";
import {CategoryInterface} from "../models/category";
import {CategoryProductsInterface} from "../models/category-products";

@Injectable()
export class DataServices{
  private urlApi = "http://127.0.0.1:8000/";

  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {}

  getProduct(id: number): Promise<any>{
    return this.httpclient.get<ProductInterface>(`${this.urlApi}product/${id}`).toPromise();
  }

  getCategories(): Promise<any>{
    return this.httpclient.get<CategoryInterface[]>(`${this.urlApi}category`).toPromise();
  }

  getCategory(id: number): Promise<any>{
    return this.httpclient.get<CategoryInterface>(`${this.urlApi}category/${id}`).toPromise();
  }

  getCategoryProducts(id: number): Promise<any>{
    return this.httpclient.get<CategoryProductsInterface>(`${this.urlApi}products_by_category/${id}`).toPromise();
  }
}
