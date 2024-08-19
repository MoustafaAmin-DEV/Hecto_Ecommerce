import { Component } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  currentLang: string;
  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLang();
  }
}
