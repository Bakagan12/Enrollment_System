import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../site_default/footer/footer.component';
import { HeaderComponent } from '../online_registration/header/header.component';
import { EmailService } from '../../../service/mailer/email.service';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [RouterModule, HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent {
  emailForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,  // Inject the EmailService
    private router: Router  // Inject Router for navigation
  ) {
    // Initialize form group with form controls and validators
    this.emailForm = this.formBuilder.group({
      recipient: ['', [Validators.required, Validators.email]],  // Email validation
    });
  }

  // Handle email submission
  sendEmail() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      console.log('Sending Email:', emailData);  // This is just for logging

      // Call the emailService's sendEmail method
      this.emailService.sendEmail(emailData.recipient).subscribe(
        () => {
          // After email is sent, navigate to the ChangePasswordComponent
          this.router.navigate(['/change_password']);
        },
        (error) => {
          this.errorMessage = 'There was an error sending the email. Please try again.';
        }
      );

      // Reset form after submission
      this.emailForm.reset();
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

}
