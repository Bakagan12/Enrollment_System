// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  serverMessage: string = '';  // To store the response from the server

  constructor(private http: HttpClient) {} // Inject HttpClient into the constructor

  ngOnInit(): void {
    // Make a GET request to the backend API to get the message
    this.http.get<{ message: string }>('http://localhost:3000/api/message')
      .subscribe({
        next: (data) => {
          this.serverMessage = data.message;  // Store the response message in the component
        },
        error: (err) => {
          console.error('Error fetching message from server', err);
        }
      });
  }
}
