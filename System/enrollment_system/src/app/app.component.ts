// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { NavbarComponent } from './navbar/navbar.component'; // Navbar component if you have one

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],  // Add necessary components
  template: `
    <app-navbar></app-navbar>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enrollment_system';
}
