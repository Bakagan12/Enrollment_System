import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../site_default/footer/footer.component';
import { HeaderComponent } from '../online_registration/header/header.component';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [RouterModule, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent {
  emailForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {
    // Initialize form group with form controls and validators
    this.emailForm = this.formBuilder.group({
      recipient: ['', [Validators.required, Validators.email]],  // Email validation
      subject: ['', Validators.required],  // Subject required validation
      message: ['', Validators.required],  // Message required validation
    });
  }

  // Handle email submission
  sendEmail() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      console.log('Sending Email:', emailData);  // Replace with actual email sending logic
      this.emailForm.reset(); // Reset form after submission
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  // Optional method for handling Online Registration button click
  goToOnlineRegistration() {
    console.log('Navigating to Online Registration...');
    // Implement your navigation logic here
  }
}
