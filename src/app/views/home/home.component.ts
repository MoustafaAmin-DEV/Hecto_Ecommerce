import { Component } from '@angular/core';
import { SharedService } from '../../Shared/sevices/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public datahomePage: any;

  constructor(public apiService: SharedService) {}

  ngOnInit() {
    this.apiService.datahomePage().subscribe((data) => {
      this.datahomePage = data;
    });
  }
}
