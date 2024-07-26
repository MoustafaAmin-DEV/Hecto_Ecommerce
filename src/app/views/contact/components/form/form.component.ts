import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private fb: FormBuilder) {}

  //emailjs
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  });

  // emailjs
  async send() {
    emailjs.init('_4HlQcz30JNTOBhK7');
    let response = await emailjs.send('service_zq7ec0j', 'template_z8avl5s', {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });
    alert('"Message has been sent " "تم ارسال رسالتك بنجاح " ');
    this.form.reset();
  }
}
