import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentLang: string;
  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLang();
  }
}
