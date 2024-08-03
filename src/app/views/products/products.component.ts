import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../Shared/services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  id: string = '';
  prodetails: any = {};
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _SharedService: SharedService
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this._SharedService.ProductDetails(this.id).subscribe((response) => {
      this.prodetails = response;
    });
  }
}
