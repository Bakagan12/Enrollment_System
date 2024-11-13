import { Routes } from '@angular/router';
import { LoginComponent } from './site/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Uncomment this line
    { path: 'login', component: LoginComponent },          // Add this line if necessary
];
