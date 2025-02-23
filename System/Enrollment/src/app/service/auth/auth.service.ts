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
          // Store the JWT token and username in localStorage
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', username);

          // Handle the redirect URL from the backend
          const redirectUrl = response.redirectUrl || '/homepage';
          this.router.navigate([redirectUrl]);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');

    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
