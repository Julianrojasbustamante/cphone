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
  token: string | null | undefined;

  user_name!: string;

  constructor(
    private router:Router,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user_name = localStorage.getItem('user_name') as string;
  }

  showCatalogue() {
    this.router.navigate(['catalogo']);
  }
  showHome() {
    this.router.navigate(['inicio']);
  }

  async login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    const auth: AuthInterface = {
      username: email,
      password: password,
    };
    if (password !== "" && email !== ""){
      this.adminService.login(auth).then(async (token) => {
        if (token.access) {
          this.token = token;
          await this.adminService.updateHeaders(token);
          this.user_name = localStorage.getItem('user_name') as string;
          Swal.fire(
            'Inicio de sesión exitoso!',
            `Bienvenido ${token.user_name}!`,
            'success'
          )
          this.router.navigate(['admin']);
        }
      }).catch((error) => {
        Swal.fire(
          'Inicio de sesión fallido',
          'Usuario o contraseña incorrectos.',
          'error'
        )
      });
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
