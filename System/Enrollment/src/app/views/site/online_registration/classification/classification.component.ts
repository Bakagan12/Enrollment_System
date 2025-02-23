import { FooterComponent } from '../../adminPage/admin-dashboard/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-classification',
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './classification.component.html',
  styles: ``
})
export class ClassificationComponent {

}
