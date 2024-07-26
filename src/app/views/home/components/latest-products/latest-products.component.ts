import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent {
  @Input() public home: any;

  public productType: string = 'newArrivals';

  setProductType(type: string) {
    this.productType = type;
  }
}
