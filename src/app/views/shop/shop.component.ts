import { Component } from '@angular/core';
import { SharedService } from 'src/app/Shared/services/shared.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  public dataShopPage: any;
  searchText: any;
  public sortType: string = 'asc';

  constructor(public apiService: SharedService) {}
  sort(event: any) {
    this.sortType = event.target.value;
  }
  ngOnInit() {
    // this.apiService.dataShopPage().subscribe((data) => {
    //   this.dataShopPage = data;
    // });
  }
}
