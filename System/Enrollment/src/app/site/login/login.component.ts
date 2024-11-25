import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Import FormsModule and CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // constructor(private authService: AuthService, private router: Router) {}
  login() {
    // this.authService.login(this.username, this.password).subscribe(
    //   (response) => {
    //     console.log('Login successful:', response);
    //     // Redirect to dashboard or home page
    //     this.router.navigate(['/dashboard']);  // Change '/dashboard' to your desired route
    //   },
    //   (error) => {
    //     console.error('Login error:', error);
    //     this.errorMessage = 'Invalid username or password';  // Show error message
    //   }
    // );
  }

  username = '';
  password = '';
  errorMessage: string = '';
}
