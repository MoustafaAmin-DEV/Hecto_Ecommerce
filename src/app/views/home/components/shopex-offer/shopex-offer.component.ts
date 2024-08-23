import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-shopex-offer',
  templateUrl: './shopex-offer.component.html',
  styleUrls: ['./shopex-offer.component.scss'],
})
export class ShopexOfferComponent {
  @Input() public homePage: any;
  lang: string;
  constructor(private languageService: LanguageService) {
    this.lang = this.languageService.getCurrentLang();
  }
}
