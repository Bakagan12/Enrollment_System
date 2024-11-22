// src/app/admin/admin.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div class="role-container">
      <h2>Welcome to the Admin Panel</h2>
      <p>This is the admin dashboard.</p>
    </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {}
