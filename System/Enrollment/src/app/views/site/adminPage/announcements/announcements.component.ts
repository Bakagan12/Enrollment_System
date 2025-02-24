import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SideBarComponent} from '../admin-dashboard/side-bar/side-bar.component';
import {HeaderComponent} from '../admin-dashboard/header/header.component';
import {FooterComponent} from '../admin-dashboard/footer/footer.component';

@Component({
  standalone: true,
  selector: 'user-roles',
  imports: [SideBarComponent, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './announcements.component.html'
})
export class AnnouncementComponent {

}



