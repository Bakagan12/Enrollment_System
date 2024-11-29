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
  username: string | null = ''; // Variable to hold the username

  constructor(private router: Router, private authService: AuthService) {
    // Retrieve username from localStorage or AuthService
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Optionally, you can call an API to get the user's profile if you have an endpoint for that
      // For now, we'll just simulate using the token or stored username
      this.username = localStorage.getItem('username') || 'User'; // If you stored the username on login
    }
  }

  logout() {
    // Clear the auth token and navigate back to login page
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username'); // Optionally remove the username
    this.authService.logout(); // Optionally use authService to handle any additional logout logic
    this.router.navigate(['auth/login']); // Navigate to login page after logout
  }
}
