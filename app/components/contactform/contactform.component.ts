import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent {

  form: FormGroup = this.fb.group({
    from_name:'',
    to_name:'Admin',
    from_email:'',
    subject:'',
    phonenumber:0,
    message:''
  })
  
  constructor (private fb: FormBuilder){}

  async send() {
    emailjs.init  ('T_sENNYZ9e_6mbITG')
    let response = await emailjs.send("service_x8thu6d","template_x8whmw8",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      phonenumber: this.form.value.phonenumber,
      message: this.form.value.message,
      });

      alert('Your Feedback has been sent successfully');
      this.form.reset();
  }
}
