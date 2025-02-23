import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../../adminPage/admin-dashboard/footer/footer.component';

@Component({
  standalone:true,
  selector: 'app-form2',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './form2.component.html',
  styles: ``
})
export class Form2Component {

}
