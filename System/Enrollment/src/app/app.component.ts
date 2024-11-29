import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { routes } from './app.routes';
import { LoginComponent } from "./site/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enrollment';
  username = '';
  password = '';
  profile: any = null;
  errorMessage: string = '';
  showLoginForm = true; // Flag to control the visibility of the login form

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('auth_token', response.token);
        this.errorMessage = '';
        this.getProfile();
        this.showLoginForm = false; // Hide login form after successful login
      },
      (error) => {
        this.errorMessage = 'Login failed!';
        console.error(error);
      }
    );
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      (response) => {
        this.profile = response;
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.profile = null;
    this.username = '';
    this.password = '';
    this.showLoginForm = true; // Show login form again after logout
  }
}
