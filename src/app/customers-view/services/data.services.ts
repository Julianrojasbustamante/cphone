import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ProductoModel} from "../models/producto.model";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Router} from "@angular/router";
import {ProductInterface} from "../models/product";

@Injectable()
export class DataServices{
  private url = "https://celuphone-b12a9-default-rtdb.firebaseio.com/"  + "datos.json";
  private url2 = "https://celuphone-b12a9-default-rtdb.firebaseio.com/"  + "datos/";
  private urlApi = "http://127.0.0.1:8000/";
  private token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzQyNTExLCJpYXQiOjE2ODEzNDA3MTEsImp0aSI6IjhmYzc1ZGQ2MDIwOTQ0ZDdhYjVhYjIyZDlkZmY2MTM4IiwidXNlcl9pZCI6MX0.VgyFtC4W6AamDKbZdVZNryBb36xzRaLnWh0F3YpoX10";
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  });


  // private auth = getAuth();

  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {}

  getProduct(id: number){
    return this.httpclient.get<ProductInterface>(`${this.urlApi}product/${id}`, { headers: this.headers });
  }
  cargarProductos(){
    return this.httpclient.get<ProductoModel[]>(this.url);
  }

  obtenerProducto(index:number){
    return this.httpclient.get<ProductoModel>(this.url2 + index + ".json");
  }

  // login(email: string, pass: string){
  //   signInWithEmailAndPassword(this.auth, email, pass).then(
  //     (data) => {
  //       data.user.getIdToken().then(
  //         (data) =>{
  //           this.token = data;
  //           this.route.navigate(["/home"]);
  //         }
  //       );
  //     }
  //   ).catch(
  //     error => {
  //       console.log(error);
  //     }
  //    );
  // }

  getIDtoken(){
    return this.token;
  }
}
