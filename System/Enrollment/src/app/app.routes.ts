import { Routes } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { DefaultDashboardComponent } from './views/dashboard/default-dashboard/default-dashboard.component';
import { AuthGuard } from './Guard/auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DefaultDashboardComponent, canActivate: [AuthGuard] },
];
