import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Standalone component imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup; // FormGroup for reactive form
  errorMessage: string = ''; // Variable to store error messages

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    // Initialize the form group using FormBuilder
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Username field required
      password: ['', Validators.required]  // Password field required
    });
  }

 // Method to handle login
 login() {
  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value; // Get form values
    this.authService.login(username, password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('username', username);
        this.router.navigate(['/submain/dashboard']);
      },
      (error) => {
        // Handle errors from the server
        if (error.error && error.error.message) {
          if (error.error.message === 'Invalid username') {
            this.errorMessage = 'The username you entered is incorrect.';
          } else if (error.error.message === 'Invalid password') {
            this.errorMessage = 'The password you entered is incorrect.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
        console.error('Login failed:', error); // Log the error
      }
    );
  } else {
    this.errorMessage = 'Please fill in both fields correctly.'; // Show error if form is invalid
  }
}
}
