import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SideBarComponent} from '../admin-dashboard/side-bar/side-bar.component';
import {HeaderComponent} from '../admin-dashboard/header/header.component';
import {FooterComponent} from '../admin-dashboard/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-user-roles',
  imports: [SideBarComponent, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './user-roles.component.html'
})
export class UserRolesComponent {

}



