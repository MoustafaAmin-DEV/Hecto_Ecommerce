import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/sevices/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public dataAboutPage: any;
  constructor(public apiService: SharedService) {}

  ngOnInit() {
    this.apiService.dataAboutPage().subscribe((data) => {
      this.dataAboutPage = data;
    });
  }
}
