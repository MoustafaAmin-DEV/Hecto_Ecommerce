import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public dataAbout: any;
  constructor(public apiService: SharedService) {}

  ngOnInit() {
    this.apiService.dataAbout().subscribe((data) => {
      this.dataAbout = data;
    });
  }
}
