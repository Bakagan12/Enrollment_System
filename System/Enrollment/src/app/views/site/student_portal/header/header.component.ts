import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../service/auth/auth.service';

@Component({
  standalone:true,
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
constructor (private authService: AuthService){}
logout(): void{
  this.authService.logout();
}
}
