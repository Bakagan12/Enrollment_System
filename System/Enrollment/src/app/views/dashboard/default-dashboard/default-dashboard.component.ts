import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router to navigate
import { AuthService } from '../../../auth.service'; // Assuming the AuthService is used for logout

@Component({
  selector: 'app-default-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.css']
})
export class DefaultDashboardComponent {
  username: string | null = '';

  constructor(private router: Router, private authService: AuthService) {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.username = localStorage.getItem('username');

    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
