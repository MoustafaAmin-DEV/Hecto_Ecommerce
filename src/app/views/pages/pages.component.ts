import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared/services/shared.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public dataShopPage: any;
  constructor(public apiService: SharedService) {}

  ngOnInit(): void {
    // this.apiService.dataShopPage().subscribe((data) => {
    //   this.dataShopPage = data;
    // });
    const itemList: HTMLElement | null = document.querySelector('.item-list');
    const gridViewBtn: HTMLElement | null =
      document.getElementById('grid-active-btn');
    const detailsViewBtn: HTMLElement | null =
      document.getElementById('details-active-btn');

    if (gridViewBtn) {
      gridViewBtn.classList.add('active-btn');
    }

    if (gridViewBtn) {
      gridViewBtn.addEventListener('click', () => {
        if (gridViewBtn) {
          gridViewBtn.classList.add('active-btn');
        }
        if (detailsViewBtn) {
          detailsViewBtn.classList.remove('active-btn');
        }
        if (itemList) {
          itemList.classList.remove('details-active');
        }
      });
    }

    if (detailsViewBtn) {
      detailsViewBtn.addEventListener('click', () => {
        if (detailsViewBtn) {
          detailsViewBtn.classList.add('active-btn');
        }
        if (gridViewBtn) {
          gridViewBtn.classList.remove('active-btn');
        }
        if (itemList) {
          itemList.classList.add('details-active');
        }
      });
    }
  }
}
