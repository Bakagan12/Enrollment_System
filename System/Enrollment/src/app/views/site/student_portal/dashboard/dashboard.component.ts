import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../site_default/footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  standalone:true,
  selector: 'student-dashboard',
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  isSidebarOpen = false;

  toggleMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
