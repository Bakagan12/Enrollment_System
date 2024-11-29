import { Routes } from '@angular/router';
import { LoginComponent } from './site/login/login.component';  // Import LoginComponent
import { DefaultDashboardComponent } from './views/dashboard/default-dashboard/default-dashboard.component';  // Dashboard component
import { AuthGuard } from './Guard/auth-guard.guard';  // AuthGuard for protected routes

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },  // Redirect root to login page
  { path: 'auth/login', component: LoginComponent },         // Login route
  { path: 'dashboard', component: DefaultDashboardComponent, canActivate: [AuthGuard] }, // Protected route
];
