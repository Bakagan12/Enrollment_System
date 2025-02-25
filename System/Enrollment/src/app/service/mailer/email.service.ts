import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  emailSend(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/email/send`, { email });
  }

  sendEmail(email: string): Observable<any> {
    return this.emailSend(email).pipe(
      tap((response) => {
        if (response && response.token) {
          // Store the JWT token and username in localStorage
          localStorage.setItem('gen_user_email', email);

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
}
