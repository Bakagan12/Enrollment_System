// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatListModule], // Add the necessary Material modules
  template: `
    <mat-toolbar color="primary">
      <span>School Portal</span>
      <span class="spacer"></span>
      <mat-nav-list>
        <a mat-list-item routerLink="/admin">Admin</a>
        <a mat-list-item routerLink="/registrar">Registrar</a>
        <a mat-list-item routerLink="/teacher">Teacher</a>
        <a mat-list-item routerLink="/student">Student</a>
        <a mat-list-item routerLink="/clinic">Clinic</a>
        <a mat-list-item routerLink="/principal">Principal</a>
        <a mat-list-item routerLink="/scheduler">Scheduler</a>
        <a mat-list-item routerLink="/guardian">Guardian</a>
        <a mat-list-item routerLink="/student-billing">Student Billing</a>
        <a mat-list-item routerLink="/enrollment">Enrollment</a>
      </mat-nav-list>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
