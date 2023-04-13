import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['/inicio']);
      return false;
    }
    // Si hay token, permitir el acceso a la ruta
    return true;
  }

}
