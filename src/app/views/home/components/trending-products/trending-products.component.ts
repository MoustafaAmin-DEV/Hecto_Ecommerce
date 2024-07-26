import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss'],
})
export class TrendingProductsComponent {
  @Input() public home: any;
  @Input() public homeAmont: any;
  @Input() public homeTrendList: any;
}
