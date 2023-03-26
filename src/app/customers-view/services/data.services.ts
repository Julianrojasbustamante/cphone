import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ProductoModel} from "../models/producto.model";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Router} from "@angular/router";

@Injectable()
export class DataServices{
  private url = "https://celuphone-b12a9-default-rtdb.firebaseio.com/"  + "datos.json";
  private url2 = "https://celuphone-b12a9-default-rtdb.firebaseio.com/"  + "datos/";
  // private auth = getAuth();
  private token: string | null | undefined;
  constructor(
    private httpclient:HttpClient,
    private route:Router
  ) {
  }
  //Guardar productos
  guardarProductos(productos:ProductoModel[]){
    this.httpclient.put(this.url, productos).subscribe(
      response => console.log("Resultado de guardar las personas: " + response),
      error => console.log("El error fue: " + error)
    );
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
