import { group } from 'console';
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
import { DashboardComponent as stundentDashboard } from './views/site/student_portal/dashboard/dashboard.component';
import { DashboardComponent as GuardianDashboard } from './views/site/guardian_portal/dashboard/dashboard.component';
import { DashboardComponent as GuidanceDashboard } from './views/site/guidance_portal/dashboard/dashboard.component';
import { DashboardComponent as ClinicDashboard } from './views/site/clinic_portal/dashboard/dashboard.component';
import { DashboardComponent as CashierDashboard } from './views/site/cashier_portal/dashboard/dashboard.component';
import { DashboardComponent as registrarDashboard } from './views/site/registrar_portal/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './views/site/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './views/site/forgot-password/change-password/change-password.component';

export const routes: Routes = [

  //Home Page
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage', component: LandingPageComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/logout', component: DefaultDashboardComponent, pathMatch: 'full',
    resolve: { logout: AuthService } },
  // { path: 'dashboard', component: DefaultDashboardComponent, canActivate: [AuthGuard] },
    // { path: 'about', component: AboutComponent },
  // { path: 'programs', component: ProgramsComponent },
  // { path: 'contact-details', component: ContactDetailsComponent },

  //Forgot Password
  {path:'forgot/password', component:ForgotPasswordComponent},
  {path:'change_password', component:ChangePasswordComponent},



  //Online Register
  {path: 'online_registration', component: ClassificationComponent},
  {path: 'online_registration/kidner_elementary/form1', component: Form1Component},
  {path: 'online_registration/kidner_elementary/form2', component: Form2Component},
  {path: 'online_registration/kidner_elementary/form3', component: Form3Component},
  {path: 'online_registration/kidner_elementary/form4', component: Form4Component},

//Technical or Admin Page
  { path: 'submain',
    data:{user_role_id:[1]},
    canActivate: [AuthGuard],
  children:[
    {path: 'dashboard',component: DashboardComponent,}
  ] },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    data:{user_role_id: [1,2]},
    // data:{roles:[1,2]},
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'dashboard/user/role', component: UserRolesComponent },
      { path: 'dashboard/announcements', component: AnnouncementComponent },
      { path: 'dashboard/reports', component: ReportsComponent },
    ]
  },

  //Staff
  {
    path: 'staff',
    canActivate: [AuthGuard],
    data:{user_role_id: [1]},
    children:[
      { path: 'dashboard', component: StaffDashboardComponent},
    ]},


  //Student Potal
  {
    path: 'student',
    canActivate: [AuthGuard],
    data:{user_role_id: [12]},
    children:[
      { path: 'dashboard', component: stundentDashboard},
    ]
  },


  //Clinics Potal
  {
    path: 'clinic',
    canActivate: [AuthGuard],
    data:{user_role_id: [11,1]},
    children:[
      { path: 'dashboard', component: ClinicDashboard},
    ]
  },


  //Registrar Portal
  {
    path: 'registrar',
    canActivate: [AuthGuard],
    data:{user_role_id: [1,5,6]},
    children:[
      { path: 'dashboard', component: registrarDashboard},
    ]
  },


  //Guardian Portal
  {
    path: 'guardian',
    canActivate: [AuthGuard],
    data:{user_role_id: [13]},
    // data:{roles:[13]},
    children:[
      { path: 'dashboard', component: GuardianDashboard, canActivate: [AuthGuard]},
    ]
  },
  //Guardian Portal
  {
    path: 'guidance',
    canActivate: [AuthGuard],
    data:{user_role_id: [1,9, 10]},
    // data:{roles:[13]},
    children:[
      { path: 'dashboard', component: GuidanceDashboard, canActivate: [AuthGuard]},
    ]
  },
  //Guardian Portal
  {
    path: 'cashier',
    canActivate: [AuthGuard],
    data:{user_role_id: [1,7,8]},
    // data:{roles:[13]},
    children:[
      { path: 'dashboard', component: CashierDashboard, canActivate: [AuthGuard]},
    ]
  }
];
