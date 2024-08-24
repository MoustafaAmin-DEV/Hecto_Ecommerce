import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ReactiveFormConfig,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { AuthService } from '../../../Shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  currentLang: string;
  constructor(
    private _AuthService: AuthService,
    private languageService: LanguageService,
    private _Router: Router
  ) {
    this.currentLang = this.languageService.getCurrentLang();
  }

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
        this._Router.navigate(['/', this.currentLang, 'login']);
      } else {
        this.error = 'email is already registered';
      }
    });
  }

  ngOnInit(): void {}
}
