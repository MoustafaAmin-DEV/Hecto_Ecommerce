import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/sevices/auth/auth.service';
import { SharedService } from 'src/app/Shared/sevices/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public dataHeader: any;
  isLogin: boolean = false;
  constructor(
    private _AuthService: AuthService,
    public apiService: SharedService
  ) {}

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
    this.apiService.dataHeader().subscribe((data) => {
      this.dataHeader = data;
    });
  }

  callLogout() {
    this._AuthService.logOut();
  }
}
