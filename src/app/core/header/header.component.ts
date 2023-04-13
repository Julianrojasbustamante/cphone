import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import Swal from'sweetalert2';
import {AdminService} from "../../admin-view/services/admin-service";
import {AuthInterface} from "../../admin-view/models/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:string | undefined;
  password:string | undefined;
  token: string | null | undefined;
  constructor(
    private router:Router,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
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
    const auth: AuthInterface = {
      username: email,
      password: password,
    };
    if (password !== "" && email !== ""){
      this.adminService.login(auth).then((token) => {
        if (token.access){
          this.token = token;
          localStorage.setItem('token', token.access);
          Swal.fire(
            'Inicio de sesión exitoso!',
            'Bienvenido Julián Rojas Bustamante!',
            'success'
          )
          this.router.navigate(['admin']);
        }
      }).catch((error) => {
        Swal.fire(
          'Inicio de sesión fallido',
          'Usuario o contraseña incorrectos.' + error,
          'error'
        )
      });
    }
  }

  mostrarModalRegistro() {
    this.router.navigate(['registro']);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
