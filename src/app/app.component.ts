import { Component } from '@angular/core';
import { AuthService } from './Shared/sevices/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Project-Hekto';

  constructor(private _AuthService: AuthService) {
    // this._AuthService.userData.subscribe(() => {
    //   if (this._AuthService.userData.getValue() !== null) {
    //     setTimeout(() => {
    //       _AuthService.logOut();
    //     }, 5000);
    //   }
    // });
  }
}
