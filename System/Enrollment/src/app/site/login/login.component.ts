import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';
  // errorMessage: string | null = null;

  // private loginApiUrl = 'http://localhost:3000/api/login';  // Node.js backend URL

  // constructor(private http: HttpClient, private router: Router) {}

  // onSubmit(): void {
  //   const credentials = {
  //     username: this.username,
  //     password: this.password
  //   };

  //   this.http.post<{ message: string }>(this.loginApiUrl, credentials).subscribe(
  //     (response) => {
  //       this.router.navigate(['/dashboard']);  // Navigate to dashboard or home page
  //     },
  //     (error) => {
  //       this.errorMessage = 'Invalid credentials. Please try again.';
  //     }
  //   );
  // }
}
