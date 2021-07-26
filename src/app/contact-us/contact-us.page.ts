import { Component, OnInit  } from '@angular/core';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { ConfigService } from '../config/config.sevice';

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.page.html',
  styleUrls: ['contact-us.page.scss']
})
export class ContactUsPage implements OnInit {

  adminEmail :string = 'easycartransportaus@gmail.com';

  // form model fields bind with ngModel
  name;
 email;
 message;
  


  constructor(private service:ConfigService){
  }

  ngOnInit(){
  }

  calculate() {
    const postData = {
      name: this.name,
      email: this.email,
      message:this.message
    }
    this.service.contactUs(postData).subscribe((res: any) => {
      if (res.status == 200) {
        this.service.showSuccess('Contact Details Sent Successfully !');
        this.resetForm();
      } else {
        this.service.showError(res.message);
      }
    })
  }

  resetForm() {
    this.name = null;
    this.email = null;
    this.message = null;
  }

}
