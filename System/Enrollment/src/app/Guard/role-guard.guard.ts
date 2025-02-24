import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Get the current user's role from the auth service (this should return the numeric user_role_id)
    const userRole = Number(this.authService.getUserRole());

    // Define the role-to-route mapping
    const roleRoutes: { [key: number]: string } = {
      1: '/submain/dashboard',
      2: '/owner/dashboard',
      3: '/principal/dashboard',
      4: '/principal/dashboard',
      5: '/registrar/dashboard',
      6: '/registrar/dashboard',
      7: '/cashier/dashboard',
      8: '/cashier/dashboard',
      9: '/guidance/dashboard',
      10: '/guidance/dashboard',
      11: '/clinic/dashboard',
      12: '/student/dashboard',
      13: '/guardian/dashboard', // Role ID 13 maps to '/guardian/dashboard'
      14: '/teacher/dashboard',
    };

    // Look up the redirectUrl based on user role
    const redirectUrl = roleRoutes[userRole] || '/homepage';

    // If redirectUrl exists, navigate to the mapped route
    if (redirectUrl) {
      this.router.navigate([redirectUrl]);
      return false;  // Prevent access to the current route
    } else {
      // If no role match is found, navigate to '/homepage'
      this.router.navigate(['/homepage']);
      return false;  // Prevent access to the current route
    }
  }
}
