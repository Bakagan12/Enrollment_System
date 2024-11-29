import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // For routing
import { AuthService } from './auth.service'; // For handling authentication
import { LoginComponent } from './site/login/login.component'; // Login component

@Component({
  selector: 'app-root',
  standalone: true,  // Indicating that this is a standalone component
  imports: [RouterModule, LoginComponent],  // Importing RouterModule for routing and LoginComponent
  templateUrl: './app.component.html',  // Your HTML template
  styleUrls: ['./app.component.css'],  // Your CSS
})
export class AppComponent {
  title = 'Enrollment';

  constructor(private authService: AuthService) {}
}
