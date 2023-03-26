import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
// import {DataServices} from "../../services/data.services";
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Swal from'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // faCartShopping = faCartShopping;
  email:string | undefined;
  password:string | undefined;
  token: string | null | undefined;
  constructor(
    private router:Router,
    // private service:DataServices
  ) { }

  ngOnInit(): void {
  }

  verCatalogo() {
    this.router.navigate(['catalogo']);
  }

  verSobreNosotros() {
    this.router.navigate(['sobre-nosotros']);
  }

  verInicio() {
    this.router.navigate(['inicio']);
  }

  verCarritoCompras() {
    this.router.navigate(['carrito-compras']);
  }

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    if (password == "a1019150999A" && email == "julianrjs15@gmail.com"){
      this.token = "sa";
      Swal.fire(
        'Inicio de sesión exitoso!',
        'Bienvenido Julián Rojas Bustamante!',
        'success'
      )
      this.router.navigate(['admin']);
    }else
      Swal.fire(
        'Inicio de sesión fallido',
        'Usuario o contraseña incorrectos.',
        'error'
      )
  }

  mostrarModalRegistro() {
    this.router.navigate(['registro']);
  }

  cerrarSesion() {
    this.token = null;
  }
}
