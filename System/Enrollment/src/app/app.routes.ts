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
import { ClassificationComponent } from './views/site/online_registration/classification/classification.component';
import { Form1Component } from './views/site/online_registration/highschool_form/form1/form1.component';
import { Form2Component } from './views/site/online_registration/highschool_form/form2/form2.component';
import { Form3Component } from './views/site/online_registration/highschool_form/form3/form3.component';
import { Form4Component } from './views/site/online_registration/highschool_form/form4/form4.component';

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
  {path: 'online_registration', component: ClassificationComponent},
  {path: 'online_registration/kidner_elementary/form1', component: Form1Component},
  {path: 'online_registration/kidner_elementary/form2', component: Form2Component},
  {path: 'online_registration/kidner_elementary/form3', component: Form3Component},
  {path: 'online_registration/kidner_elementary/form4', component: Form4Component},

  //Admin
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/user/role', component: UserRolesComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/announcements', component: AnnouncementComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard/reports', component: ReportsComponent, canActivate: [AuthGuard] },

  //Staff
  { path: 'staff/dashboard', component: StaffDashboardComponent, canActivate: [AuthGuard]},

];
