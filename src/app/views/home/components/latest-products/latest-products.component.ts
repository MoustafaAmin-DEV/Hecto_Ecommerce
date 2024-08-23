import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/Shared/services/language/language.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent {
  @Input() public homePage: any;

  public productType: string = 'newArrivals';
  lang: string;
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.lang = this.languageService.getCurrentLang();
  }

  setProductType(type: string) {
    this.productType = type;
  }
}
