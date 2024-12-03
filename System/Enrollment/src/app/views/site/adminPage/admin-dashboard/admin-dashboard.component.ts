import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { RouterModule } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {SideBarComponent } from './side-bar/side-bar.component';



@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, RouterModule, SideBarComponent ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
