import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ProductInterface} from "../models/product";
import {CategoryInterface} from "../models/category";
import {CategoryProductsInterface} from "../models/category-products";

@Injectable()
export class DataServices{
  private urlApi = "http://127.0.0.1:8000/";

  private token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzQyNTExLCJpYXQiOjE2ODEzNDA3MTEsImp0aSI6IjhmYzc1ZGQ2MDIwOTQ0ZDdhYjVhYjIyZDlkZmY2MTM4IiwidXNlcl9pZCI6MX0.VgyFtC4W6AamDKbZdVZNryBb36xzRaLnWh0F3YpoX10";

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  });

  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {}

  getProduct(id: number): Promise<any>{
    return this.httpclient.get<ProductInterface>(`${this.urlApi}product/${id}`).toPromise();
    // return this.httpclient.get<ProductInterface>(`${this.urlApi}product/${id}`, { headers: this.headers });
  }

  getCategories(): Promise<any>{
    return this.httpclient.get<ProductInterface>(`${this.urlApi}category`).toPromise();
  }

  getCategory(id: number): Promise<any>{
    return this.httpclient.get<CategoryInterface>(`${this.urlApi}category/${id}`).toPromise();
  }

  getCategoryProducts(id: number): Promise<any>{
    return this.httpclient.get<CategoryProductsInterface>(`${this.urlApi}products_by_category/${id}`).toPromise();
  }
}
