import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../adminPage/admin-dashboard/footer/footer.component';

@Component({
  standalone:true,
  selector: 'app-form4',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './form4.component.html',
  styles: ``
})
export class Form4Component {

}
