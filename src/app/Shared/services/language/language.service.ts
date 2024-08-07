import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang: string = 'en';
  isLoading = new BehaviorSubject<boolean>(false);
  languageChanged = new Subject<string>();
  constructor(
    private translate: TranslateService,
    private router: Router,
    private location: Location
  ) {
    const savedLang = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang();
    this.currentLang =
      savedLang || (browserLang?.match(/en|ar/) ? browserLang : 'en');
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
    this.updateDirection(this.currentLang);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  setLanguage(language: string): void {
    this.currentLang = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.updateDirection(language);
    this.languageChanged.next(language);
    const currentUrl = this.router.url.split('/').slice(2).join('/');
    this.router.navigate([`/${language}/${currentUrl}`]).then(() => {
      this.isLoading.next(false);
      this.location.go(`/${language}/${currentUrl}`);
      window.location.reload();
    });
  }
  private updateDirection(language: string): void {
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = language === 'ar' ? 'rtl' : 'ltr';
  }
}
