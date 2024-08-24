import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-our-features',
  templateUrl: './our-features.component.html',
  styleUrls: ['./our-features.component.scss'],
})
export class OurFeaturesComponent {
  @Input() public homePage: any;
  lang: string;
  constructor(private languageService: LanguageService) {
    this.lang = this.languageService.getCurrentLang();
  }
}
