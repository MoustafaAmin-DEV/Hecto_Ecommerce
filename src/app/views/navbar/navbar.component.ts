import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/services/auth/auth.service';
import { LanguageService } from 'src/app/Shared/services/language/language.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class navbarComponent implements OnInit {
  isLogin: boolean = false;
  private authSubscription: Subscription = new Subscription();
  currentLang!: string;
  userEmail$: Observable<string | null>;
  userName$: Observable<string | null>;
  constructor(
    private _AuthService: AuthService,
    private languageService: LanguageService
  ) {
    this.userEmail$ = this._AuthService.getUserEmail();
    this.userName$ = this._AuthService.getUserName();
    this.currentLang = this.languageService.getCurrentLang();
  }

  ngOnInit(): void {
    this.currentLang = this.languageService.getCurrentLang();
    this.authSubscription = this._AuthService.userData.subscribe(user => {
      this.isLogin = user !== null;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }


  callLogout() {
    this._AuthService.logOut();
  }
  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.currentLang = language;
  }

}
