import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LanguageService } from '../language/language.service';
import { User } from '../../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentLang: string;
  private userSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  public userData: Observable<any | null> = this.userSubject.asObservable();
  private baseUrl = 'http://localhost:3000/users';
  constructor(
    private _HttpClient: HttpClient,
    private languageService: LanguageService,
    private _Router: Router
  ) {
    this.currentLang = this.languageService.getCurrentLang();
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  register(user: User): Observable<any> {
    return this._HttpClient.post(this.baseUrl, user);
  }

  checkEmailExists(email: string): Observable<any> {
    return this._HttpClient.get<any[]>(`${this.baseUrl}?email=${email}`);
  }

  getUserFromLocalStorage(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }


  login(email: string, password: string): Observable<any> {
    return this._HttpClient.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`);
  }

  saveUserToLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.userSubject.next(user);
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
    this._Router.navigate(['/', this.currentLang, 'login']);
  }

  isLoggedIn(): boolean {
    return this.userSubject.getValue() !== null;
  }

  getUserEmail(): Observable<string | null> {
    return this.userData.pipe(
      map(user => user ? user.email : null)
    );
  }

  getUserName(): Observable<string | null> {
    return this.userData.pipe(
      map(user => user ? user.firstName + ' ' + user.lastName : null)
    );
  }

  checkUser(email: string, password: string): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/users?email=${email}`).pipe(
      map((users: any) => {
        const user = users.find((u: any) => u.email === email && u.password === password);
        if (user) {
          return { valid: true, user };
        } else if (users.length > 0) {
          return { valid: false, message: 'Incorrect password' };
        } else {
          return { valid: false, message: 'User not found' };
        }
      })
    );
  }
}
