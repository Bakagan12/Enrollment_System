import { Routes } from '@angular/router';
import { LoginComponent } from './views/site/login/login.component';
import { DefaultDashboardComponent } from './views/dashboard/default-dashboard/default-dashboard.component';
import { AuthGuard } from './Guard/auth-guard.guard';
import { AuthService } from './auth.service';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DefaultDashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth/logout', component: DefaultDashboardComponent, pathMatch: 'full',
    resolve: { logout: AuthService } },
//     { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
//   { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
//   { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] }
];
