import { ContactDetailsComponent } from './views/homePage/contact-details/contact-details.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth-guard.guard';
import { AuthService } from './service/auth/auth.service';
import { DefaultDashboardComponent } from './views/dashboard/default-dashboard/default-dashboard.component';
import { LandingPageComponent } from './views/homePage/landing-page/landing-page.component';
import { LoginComponent } from './views/site/login/login.component';
import { AboutComponent } from './views/homePage/about/about.component';
import { ProgramsComponent } from './views/homePage/programs/programs.component';
import {DashboardComponent} from './views/site/submaindashboard/dashboard/dashboard.component';
import {AdminDashboardComponent} from './views/site/adminPage/admin-dashboard/admin-dashboard.component';
import {StaffDashboardComponent} from './views/site/staffPage/dashboard/dashboard.component';
import {UserRolesComponent} from './views/site/adminPage/user-roles/user-roles.component';
import {AnnouncementComponent} from './views/site/adminPage/announcements/announcements.component';
import {ReportsComponent} from './views/site/adminPage/reports/reports.component';
import {OnlineRegistrationComponent} from './views/site/onlineRegistration/online-registration/online-registration.component';

export const routes: Routes = [

  //Home Page
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage', component: LandingPageComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DefaultDashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth/logout', component: DefaultDashboardComponent, pathMatch: 'full',
    resolve: { logout: AuthService } },
    { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'contact-details', component: ContactDetailsComponent },
  { path: 'submain/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  //Online Register
  {path: 'online_registration', component: OnlineRegistrationComponent},

  //Admin
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/user/role', component: UserRolesComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/announcements', component: AnnouncementComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/reports', component: ReportsComponent, canActivate: [AuthGuard] },

  //Staff
  { path: 'staff/dashboard', component: StaffDashboardComponent, canActivate: [AuthGuard]},

];
