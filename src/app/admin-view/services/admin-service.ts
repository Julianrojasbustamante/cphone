import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ProductInterface} from "../../customers-view/models/product";
import {ProductManageInterface} from "../models/product-manage";
import {AuthInterface} from "../models/auth";

@Injectable()
export class AdminService {
  private urlApi = "http://127.0.0.1:8000/";

  private token = localStorage.getItem('token');

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  });

  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {}

  getProducts(): Promise<any>{
    return this.httpclient.get<ProductInterface[]>(`${this.urlApi}product`).toPromise();
  }

  getProduct(id: number): Promise<any>{
    return this.httpclient.get<ProductInterface[]>(`${this.urlApi}product/${id}`).toPromise();
  }

  login(credentials: AuthInterface): Promise<any>{
    return this.httpclient.post(`${this.urlApi}login`, credentials).toPromise();
  }

  updateProduct(product: ProductManageInterface): Promise<any>{
    return this.httpclient.put(`${this.urlApi}product_manage/${product.id}`, product, { headers: this.headers }).toPromise();
  }

  createProduct(product: ProductManageInterface): Promise<any>{
    return this.httpclient.post(`${this.urlApi}product_manage`, product, { headers: this.headers }).toPromise();
  }

  deleteProduct(id: number): Promise<any>{
    return this.httpclient.delete(`${this.urlApi}product_manage/${id}`, { headers: this.headers }).toPromise();
  }
}
