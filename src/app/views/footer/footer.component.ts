import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Shared/services/auth/auth.service';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isLogin: boolean = false;
  currentLang: string;
  private authSubscription: Subscription = new Subscription();
  constructor(private languageService: LanguageService, private _AuthService: AuthService) {
    this.currentLang = this.languageService.getCurrentLang();
    this.authSubscription = this._AuthService.userData.subscribe(user => {
      this.isLogin = user !== null;
    });
  }
}
