import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from './language/language.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public urlHome = ' http://localhost:3000';
  public urlProduct = 'http://localhost:3000/featuredPro';
  lang: string;
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.lang = this.languageService.getCurrentLang();
  }

  datahomePage() {
    return this.http.get(`${this.urlHome}/homePage`);
  }
  ProductDetails(id: string) {
    return this.http.get(`${this.urlProduct}/${id}`);
  }

  dataShopPage() {
    return this.http.get(`${this.urlHome}/shopPage`);
  }
}
