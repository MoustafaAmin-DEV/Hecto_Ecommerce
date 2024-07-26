import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ReactiveFormConfig,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  error: string = '';

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9_-]{8,15}$'),
    ]),
    cPassword: new FormControl(
      '',
      RxwebValidators.compare({ fieldName: 'password' })
    ),
  });

  submitRegister(formInfo: FormGroup) {
    this._AuthService.register(formInfo.value).subscribe((response) => {
      if (response.message == 'Done') {
        this._Router.navigate(['/login']);
      } else {
        this.error = 'email is already registered';
      }
    });
  }

  ngOnInit(): void {}
}
