import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('auth_token'); // Get token from local storage

    if (token) {
      return true;  // Allow access if token is present
    } else {
      this.router.navigate(['/auth/login']);  // Redirect to login if no token
      return false;
    }
  }
}
