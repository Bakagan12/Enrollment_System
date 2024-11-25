import { Routes } from '@angular/router';
import { LoginComponent } from './site/login/login.component';  // Adjust the import path as necessary

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
];
