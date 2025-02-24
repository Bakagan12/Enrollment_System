import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('auth_token');
    const userRoleId = localStorage.getItem('user_role_id');

    if (token && userRoleId) {
      // Check if the route's required role matches the user's role
      const requiredRoles = next.data['user_role_id'];
      if (requiredRoles && !requiredRoles.includes(Number(userRoleId))) {
        // Redirect to the user's own dashboard if they do not have access
        this.router.navigate([`/${this.getRedirectPath(Number(userRoleId))}/dashboard`]);
        return false;
      }
      return true;
    }

    // Redirect to login if no token is found
    this.router.navigate(['/auth/login']);
    return false;
  }

  private getRedirectPath(roleId: number): string {
    switch (roleId) {
      case 1: return 'admin';
      case 2: return 'owner';
      case 3: return 'principal';
      case 4: return 'principal';
      case 5: return 'registrar';
      case 6: return 'registrar';
      case 7: return 'cashier';
      case 8: return 'cashier';
      case 9: return 'guidance';
      case 10: return 'guidance';
      case 11: return 'clinic';
      case 12: return 'student';
      case 13: return 'guardian';
      case 14: return 'teacher';
      default: return 'auth/login';
    }
  }
}
