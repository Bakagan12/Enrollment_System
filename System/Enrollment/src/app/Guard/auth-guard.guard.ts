import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if window and localStorage are available (i.e., running in the browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token');
      if (token) {
        return true; // Token exists, allow navigation
      } else {
        this.router.navigate(['/auth/login']);
        return false; // No token, redirect to login
      }
    } else {
      // If running in a non-browser environment (e.g., SSR), deny navigation
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
