import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {FooterComponent} from '../../../homePage/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
