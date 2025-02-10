import { Component } from '@angular/core';
import {AuthService} from '../../../../../service/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private authService: AuthService, private router: Router){}
  logout(): void{
    this.authService.logout();
  }
goToDashboard() {
  this.router.navigate(['/submain/dashboard']);
}

}
