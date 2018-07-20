import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { isNull } from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      console.log('log in already')
      return true;
    }

    return new Observable(observer => {
      this.authService.getAuthInfo().subscribe(
        authInfo => {
          observer.next(!isNull(authInfo));
        },
        err => {
          this.router.navigate(['login']);
          return observer.next(false);
        }
      );
    });
  }
}
