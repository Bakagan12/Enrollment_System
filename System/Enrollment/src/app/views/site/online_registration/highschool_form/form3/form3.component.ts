import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../../adminPage/admin-dashboard/footer/footer.component';

@Component({
  standalone:true,
  selector: 'app-form3',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './form3.component.html',
  styles: ``
})
export class Form3Component {

}
