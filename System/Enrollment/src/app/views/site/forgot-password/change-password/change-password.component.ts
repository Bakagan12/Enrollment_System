import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  // styleUrls: ['./change-password.component.css'] // Optional for custom styles
})
export class ChangePasswordComponent {

  // Check if the form is valid
  checkFormValidity() {
    const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
    const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        loginBtn.disabled = !allFilled;

        // Toggle button styles based on whether the form is filled
        if (allFilled) {
          loginBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
          loginBtn.classList.add('bg-[#162938]', 'cursor-pointer');
        } else {
          loginBtn.classList.remove('bg-[#162938]', 'cursor-pointer');
          loginBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
        }
      });
    });
  }

  ngOnInit(): void {
    this.checkFormValidity();
  }
}
