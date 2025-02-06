import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth/auth.service';
// import { LoginComponent } from './views/site/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Enrollment';

  constructor(private authService: AuthService) {}
}
