import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public dataFooter: any;
  constructor(private http: HttpClient, public apiService: SharedService) {}

  createFooter() {
    this.apiService.dataFooter().subscribe((data) => {
      this.dataFooter = data;
    });
  }
  ngOnInit() {
    this.createFooter();
  }
}
