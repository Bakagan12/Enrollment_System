// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ClinicComponent } from './clinic/clinic.component';
import { PrincipalComponent } from './principal/principal.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { GuardianComponent } from './guardian/guardian.component';
import { StudentBillingComponent } from './student-billing/student-billing.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';


export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'clinic', component: ClinicComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'guardian', component: GuardianComponent },
  { path: 'student-billing', component: StudentBillingComponent },
  { path: 'enrollment', component: EnrollmentComponent }
];
