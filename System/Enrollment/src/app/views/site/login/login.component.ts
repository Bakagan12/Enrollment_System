import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { FooterComponent } from '../adminPage/admin-dashboard/footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FooterComponent, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    // Initialize the form group using FormBuilder
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // Method to handle login
   login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          // You can also store the username and token in localStorage if needed
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', username);
          localStorage.setItem('user_role_id', response.user_role_id);

          // If the backend sends a `redirectUrl`, navigate to it, otherwise default to `/dashboard`
          const redirectUrl = response.redirectUrl || '/homepage';
          this.router.navigate([redirectUrl]);
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
          console.error('Login failed:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in both fields correctly.';
    }
  }
  goToOnlineRegistration() {
    this.router.navigate(['/online_registration']);
  }

}
