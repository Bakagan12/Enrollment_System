import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  // Navigate to the Dashboard page
  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  // Handle user logout
  logout(): void {
    console.log('Logging out...');
    // Add your logout logic here (e.g., clear user data, invalidate session)
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }
}
