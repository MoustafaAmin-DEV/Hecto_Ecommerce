import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public datahomePage: any;
  constructor(public apiService: SharedService) {}

  ngOnInit() {
    this.apiService.datahomePage().subscribe((data) => {
      this.datahomePage = data;
    });
  }
}
