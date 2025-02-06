import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {FooterComponent} from '../../../homePage/footer/footer.component';
import {AuthService} from '../../../../service/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor (private authService: AuthService){}
logout(): void{
  this.authService.logout();
}
}
