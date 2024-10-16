import { Component } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
 
  subject: any;
  // message: any;
  phone_no : any;
  agree: boolean = false;
  form: FormGroup;
  // mainCaptchaValue: string;
  txtinput : any;
  
 
   
  constructor(public fb: FormBuilder,
    public dataService: ServicesService)
  {
    this.form = this.fb.group({
      name: new FormControl ('',[Validators.required, Validators.minLength(2)]),
      email: new FormControl  ('', [Validators.required,Validators.email]),
      query_type: new FormControl  ('', Validators.required),
      message: new FormControl  ('', Validators.required),
      phone: new FormControl ('',[Validators.required, Validators.pattern('^[0-9_-]{10,12}')]),
      // agree: ['',Validators.required]
      // recaptcha: ['', Validators.required],
      mainCaptchaValue: new FormControl ('', Validators.required), // Add any validation as needed
      txtinput: new FormControl ('', [Validators.required, Validators.maxLength(10)])
    })
  }
  ngOnInit(): void {
  
    // this.submit();
  }
  get name() { return this.form.get('name') }
  get email() { return this.form.get('email') }
  get query_type() { return this.form.get('query_type') }
  get message() { return this.form.get('message') }
  get phone() { return this.form.get('phone') }
  // get txtinput() { return this.form.get('txtinput') }
  // get recaptcha() { return this.form.get('recaptcha') }        
//  siteKey:string = "6LewTKsoAAAAAKl-6TZl5-T3Kk9Ek-cn91BRexAj";
  
// submit() {
//   if (this.form.invalid) {
//     this.dataService.showToast('error', 'Please fill all the details');
//     console.log('Please fill all the details');
//   }else if (!this.txtinput) {
//     this.dataService.showToast('error', 'Please fill the captcha');
//   } 
//   else if (this.form.valid) {
//     this.dataService.contactUs(this.form.value).then((resp) => {
//       this.dataService.showToast('success', 'Your Message has been sent!!');
//       this.form.reset();
      
//       console.log('success');
//     });
//   } else {
//     this.dataService.showToast('error', 'Captcha does not match!!');
//   }
//   console.log('out of program');
// }




 
  

  removeSpaces(input: string): string {
    return input.replace(/\s/g, '');
    // return String.split('').join('');
  }
  
  
}
