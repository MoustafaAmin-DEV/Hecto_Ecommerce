import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/services/auth/auth.service';
import { SharedService } from 'src/app/Shared/services/shared.service';
import { LanguageService } from 'src/app/Shared/services/language/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class navbarComponent implements OnInit {
  isLogin: boolean = false;
  currentLang: string;
  constructor(
    private _AuthService: AuthService,
    private languageService: LanguageService
  ) {
    this.currentLang = this.languageService.getCurrentLang();
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
    this.currentLang = this.languageService.getCurrentLang();
  }

  callLogout() {
    this._AuthService.logOut();
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.currentLang = language;
  }
}
