import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthClassGuard implements CanActivate {
  constructor(private _AuthService: AuthService, private _router: Router) { }
  canActivate(): boolean {
    if (this._AuthService.isLoggedIn()) {
      return true; // إذا كان المستخدم مسجلاً للدخول، يسمح له بالدخول للمسار
    } else {
      this._router.navigate(['/login']); // إعادة التوجيه إلى صفحة تسجيل الدخول
      return false;
    }
  }
}
