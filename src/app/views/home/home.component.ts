import { Component } from '@angular/core';
import { SharedService } from '../../Shared/sevices/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public dataSlider: any;
  public dataFeaturedPro: any;
  public dataDiscountItem: any;
  public dataLatestPro: any;
  public dataSecOffer: any;
  public dataTrendList: any;
  public dataFooter: any;
  public dataLeatestBlog: any;
  public dataAmontOffer: any;
  public dataCatePro: any;
  public dataTrendingPro: any;

  constructor(public apiService: SharedService) {}

  ngOnInit() {
    this.apiService.dataSlider().subscribe((data) => {
      this.dataSlider = data;
    });
    this.apiService.dataFeaturedPro().subscribe((data) => {
      this.dataFeaturedPro = data;
    });
    this.apiService.dataDiscountItem().subscribe((data) => {
      this.dataDiscountItem = data;
    });
    this.apiService.dataLatestPro().subscribe((data) => {
      this.dataLatestPro = data;
    });
    this.apiService.dataSecOffer().subscribe((data) => {
      this.dataSecOffer = data;
    });
    this.apiService.dataTrendList().subscribe((data) => {
      this.dataTrendList = data;
    });

    this.apiService.dataLeatestBlog().subscribe((data) => {
      this.dataLeatestBlog = data;
    });
    this.apiService.dataAmontOffer().subscribe((data) => {
      this.dataAmontOffer = data;
    });
    this.apiService.dataCatePro().subscribe((data) => {
      this.dataCatePro = data;
    });
    this.apiService.dataTrendingPro().subscribe((data) => {
      this.dataTrendingPro = data;
    });
  }
}
