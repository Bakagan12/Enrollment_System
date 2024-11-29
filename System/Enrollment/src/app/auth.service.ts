import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  loginAndRedirect(username: string, password: string): Observable<any> {
    return this.login(username, password).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);  // Save token
          localStorage.setItem('username', username);
          this.router.navigate(['/dashboard']);  // Redirect to dashboard
        }
      })
    );
  }
  logout(): void {
    // Remove token and username from localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');

    // Optionally, if you have a server-side session or need to notify the server, make an API request to log out:
    // this.http.post(`${this.apiUrl}/auth/logout`, {}).subscribe();

    // Navigate back to the login page
    this.router.navigate(['/auth/login']);
  }

  // Optional: Check if the user is logged in by checking if a token exists
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
