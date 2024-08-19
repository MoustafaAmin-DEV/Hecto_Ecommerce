import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentLang: string;
  userData = new BehaviorSubject(null);
  constructor(
    private _HttpClient: HttpClient,
    private languageService: LanguageService,
    private _Router: Router
  ) {
    this.currentLang = this.languageService.getCurrentLang();
    if (localStorage.getItem('userToken') != null) {
      this.setUserData();
    }
  }

  setUserData(): void {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }
  register(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://register-for-test.vercel.app/auth/signup',
      userData
    );
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://register-for-test.vercel.app/auth/signin',
      userData
    );
  }

  logOut(): void {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/', this.currentLang, 'login']);
  }
}
