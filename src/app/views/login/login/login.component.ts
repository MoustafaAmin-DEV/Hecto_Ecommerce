import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Shared/services/language/language.service';
import { Observable } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentLang: string;
  userData$: Observable<any | null>;
  errorMessage: string = '';
  constructor(
    private _AuthService: AuthService,
    private languageService: LanguageService,
    private _Router: Router,
    private translate: TranslateService
  ) {
    this.currentLang = this.languageService.getCurrentLang();
    this.userData$ = this._AuthService.userData;
  }
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      RxwebValidators.required({ message: 'ERRORS.error_required' }),
      RxwebValidators.email({ message: 'ERRORS.error_email' })]),
    password: new FormControl('', RxwebValidators.required({ message: 'ERRORS.error_required' })),
  });

  login() {
    const { email, password } = this.loginForm.value;
    this.isLoading = true;

    this._AuthService.checkUser(email, password).subscribe(
      (response) => {
        setTimeout(() => {
          if (response.valid) {
            sessionStorage.setItem('email', email as string);
            this._AuthService.saveUserToLocalStorage(response.user);
            this._Router.navigate(['/' + this.currentLang + '/home']);
          } else {
            this.errorMessage = this.translate.instant(response.message === 'Incorrect password'
              ? this.translate.instant('ERRORS.error_incorrect_password')
              : this.translate.instant('ERRORS.error_email_not_exists'));
          }
          this.isLoading = false;
        }, 3000);
      }
    );
  }
  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
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

  ngOnInit(): void { }
}
