import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  emailSend(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/email/send`, { email });
  }

  sendEmail(email: string): Observable<any> {
    return this.emailSend(email).pipe(
      tap((response) => {
        if (response && response.token) {
          // Store the JWT token and username in localStorage
          localStorage.setItem('gen_user_email', email);
        }
      })
    );
  }
}
