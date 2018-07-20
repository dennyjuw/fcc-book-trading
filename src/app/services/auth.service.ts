import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    // this.user.subscribe(
    //   user => {
    //     this.userDetails = user ? user : null;
    //     console.log(this.userDetails)
    //   }
    // )
  }

  getAuthInfo(): Observable<any> {
    return new Observable(observer => {
      return this.user.subscribe(
        user => {
          this.userDetails = user ? user : null;
          observer.next(this.userDetails);
        },
        err => {
          observer.error(err);
        }
      )
    });
  }

  isLoggedIn() {
    return (this.userDetails === null ? false : true)
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut()
      .then(res => this.router.navigate(['/']));
  }

}
