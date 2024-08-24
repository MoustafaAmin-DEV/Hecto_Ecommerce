import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentLang: string;
  constructor(
    private _AuthService: AuthService,
    private languageService: LanguageService,
    private _Router: Router
  ) {
    this.currentLang = this.languageService.getCurrentLang();
  }

  error: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9_-]{8,15}$'),
    ]),
  });

  submitLogin(formInfo: FormGroup) {
    this._AuthService.login(formInfo.value).subscribe((response) => {
      if (response.message == 'Done') {
        localStorage.setItem('userToken', JSON.stringify(response.token));
        this._AuthService.setUserData();
        this._Router.navigate(['/', this.currentLang, 'home']);
      } else {
        this.error = 'email is already Email wrong';
      }
    });
  }

  ngOnInit(): void {}
}
