import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { AuthService } from '../../../Shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Shared/services/language/language.service';
import { TranslateService } from '@ngx-translate/core';

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
    private _Router: Router,
    private translate: TranslateService
  ) {
    this.currentLang = this.languageService.getCurrentLang();
  }

  matchPasswords(passwordControlName: string) {
    return (control: AbstractControl) => {
      if (!this.registerForm) return null;
      const passwordControl = this.registerForm.get(passwordControlName);
      return passwordControl && control.value !== passwordControl.value
        ? { passwordMismatch: true }
        : null;
    };
  }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.minLength({ value: 4, message: 'ERRORS.error_minLength' }),
      RxwebValidators.maxLength({ value: 8, message: 'ERRORS.error_maxLength' }),
      RxwebValidators.pattern({
        expression: { 'noArabic': /^[^\u0600-\u06FF]+$/ },
        message: this.translate.instant('ERRORS.error_character_arabic')
      })
    ]),
    lastName: new FormControl(null, [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.minLength({ value: 4, message: 'ERRORS.error_minLength' }),
      RxwebValidators.maxLength({ value: 8, message: 'ERRORS.error_maxLength' }),
      RxwebValidators.pattern({
        expression: { 'noArabic': /^[^\u0600-\u06FF]+$/ },
        message: 'ERRORS.error_character_arabic'
      })
    ]),
    email: new FormControl(null, [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.email({ message: 'ERRORS.error_email' })
    ]),
    password: new FormControl(null, [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.pattern({
        expression: {
          'passwordPattern': /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        },
        message: 'ERRORS.error_password'
      }),
      RxwebValidators.maxLength({ value: 15, message: 'ERRORS.error_Maximum' }),
    ]),
    cPassword: new FormControl(null, [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.compare({
        fieldName: 'password',
        message: 'ERRORS.error_Cpassword',
      })
    ]),
  });

  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);
    if (control && control.errors) {
      const errorKey = Object.keys(control.errors)[0];
      const error = control.errors[errorKey];
      if (typeof error === 'object' && error.message) {
        return error.message;
      }
      return error;
    }
    return '';
  }

  errorMessage: string = '';
  isLoading: boolean = false;
  submitRegister() {
    this.errorMessage = '';
    this.isLoading = true;
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      this.isLoading = false;
    } else {
      const formData = this.registerForm.value;
      this._AuthService.checkEmailExists(formData.email).subscribe(
        (response) => {
          if (response && response.length > 0) {
            setTimeout(() => {
              this.errorMessage = this.translate.instant('ERRORS.error_email_exists');
              this.isLoading = false;
            }, 3000)
          } else {
            this._AuthService.register(formData).subscribe(
              (res) => {
                this.errorMessage = '';
                setTimeout(() => {
                  this._Router.navigate(['/', this.currentLang, 'login']);
                  this.isLoading = false;
                }, 3000);
              }
            );
          }
        }
      );
    }
  }

  ngOnInit(): void {

  }
}
