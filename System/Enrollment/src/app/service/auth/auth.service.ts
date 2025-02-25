import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

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
          localStorage.setItem('user_role_id', response.user_role_id);

          // Handle the redirect URL from the backend
          const redirectUrl = response.redirectUrl || '/auth/login';
          if (redirectUrl) {
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate(['/auth/login']);
          }
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_role_id');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getUserRole(): string {
    return localStorage.getItem('user_role_id') || '';
  }
}
