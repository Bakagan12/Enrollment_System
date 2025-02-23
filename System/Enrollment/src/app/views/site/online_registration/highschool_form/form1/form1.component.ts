import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../../adminPage/admin-dashboard/footer/footer.component';
import { Router } from 'express';

@Component({
  standalone:true,
  selector: 'app-form1',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './form1.component.html',
  styles: ``
})
export class Form1Component {

}
