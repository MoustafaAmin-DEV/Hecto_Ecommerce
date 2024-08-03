import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

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
        this._Router.navigate(['/home']);
      } else {
        this.error = 'email is already Email wrong';
      }
    });
  }

  ngOnInit(): void {}
}
