import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ProductInterface} from "../../customers-view/models/product";
import {ProductManageInterface} from "../models/product-manage";
import {AuthInterface} from "../models/auth";

@Injectable()
export class AdminService {
  private urlApi = "http://127.0.0.1:8000/";

  private token!: string;

  private headers!: HttpHeaders;

  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {}

  async updateHeaders(token: any) {
    localStorage.setItem('token', token.access);
    localStorage.setItem('user_id', token.user_id);
    localStorage.setItem('user_name', token.user_name);
    this.token = localStorage.getItem('token') as string;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
  }

  getProducts(): Promise<any>{
    return this.httpclient.get<ProductInterface[]>(`${this.urlApi}product`).toPromise();
  }

  login(credentials: AuthInterface): Promise<any>{
    return this.httpclient.post(`${this.urlApi}login`, credentials).toPromise();
  }

  updateProduct(product: ProductManageInterface): Promise<any>{
    return this.httpclient.put(`${this.urlApi}product_manage/${product.id}`, product, { headers: this.headers }).toPromise();
  }

  saveProduct(product: ProductManageInterface): Promise<any>{
    return this.httpclient.post(`${this.urlApi}product_manage`, product, { headers: this.headers }).toPromise();
  }

  deleteProduct(id: number): Promise<any>{
    return this.httpclient.delete(`${this.urlApi}product_manage/${id}`, { headers: this.headers }).toPromise();
  }
}
