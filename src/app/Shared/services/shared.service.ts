import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public urlHome = ' http://localhost:3000';
  public urlProduct = 'http://localhost:3000/featuredPro';

  constructor(private http: HttpClient) {}

  datahomePage() {
    return this.http.get(`${this.urlHome}/homePage`);
  }
  ProductDetails(id: string) {
    return this.http.get(`${this.urlProduct}/${id}`);
  }
  dataAboutPage() {
    return this.http.get(`${this.urlHome}/aboutPage`);
  }
  dataShopPage() {
    return this.http.get(`${this.urlHome}/shopPage`);
  }
}
