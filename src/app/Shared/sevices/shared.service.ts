import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public urlHome = ' http://localhost:3000';
  public urlProduct = 'http://localhost:3000/featuredPro';

  constructor(private http: HttpClient) {}

  dataSlider() {
    return this.http.get(`${this.urlHome}/slider`);
  }

  dataFeaturedPro() {
    return this.http.get(`${this.urlHome}/featuredPro`);
  }
  dataLatestPro() {
    return this.http.get(`${this.urlHome}/latestPro`);
  }
  dataTrendingPro() {
    return this.http.get(`${this.urlHome}/trendingPro`);
  }
  dataAmontOffer() {
    return this.http.get(`${this.urlHome}/amontOffer`);
  }
  dataTrendList() {
    return this.http.get(`${this.urlHome}/trendList`);
  }

  dataSecOffer() {
    return this.http.get(`${this.urlHome}/secOffer`);
  }
  dataDiscountItem() {
    return this.http.get(`${this.urlHome}/discountItem`);
  }
  dataFooter() {
    return this.http.get(`${this.urlHome}/footer`);
  }
  dataHeader() {
    return this.http.get(`${this.urlHome}/header`);
  }
  dataLeatestBlog() {
    return this.http.get(`${this.urlHome}/leatestBlog`);
  }
  dataCatePro() {
    return this.http.get(`${this.urlHome}/catePro`);
  }
  ProductDetails(id: string) {
    return this.http.get(`${this.urlProduct}/${id}`);
  }
  dataAbout() {
    return this.http.get(`${this.urlHome}/ourfeatures`);
  }
}
