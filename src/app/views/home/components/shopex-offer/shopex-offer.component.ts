import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopex-offer',
  templateUrl: './shopex-offer.component.html',
  styleUrls: ['./shopex-offer.component.scss'],
})
export class ShopexOfferComponent {
  @Input() public home: any;
}
