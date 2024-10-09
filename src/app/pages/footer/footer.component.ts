import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  enquiryForm: FormGroup;
  formSubmitted: boolean = false; // Track form submission

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      country: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.formSubmitted = true; // Mark form as submitted

    if (this.enquiryForm.valid) {
      console.log('Form Submitted', this.enquiryForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.enquiryForm.get(field);
    return !!control?.invalid && (!!control?.touched || !!control?.dirty || this.formSubmitted);
  }
}
