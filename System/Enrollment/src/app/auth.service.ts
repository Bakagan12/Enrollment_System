import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // This service is available throughout the application
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';  // The URL to your backend API

  constructor(private http: HttpClient) {}

  // Method to login the user
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  // Method to get the user's profile (protected route)
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }
}
