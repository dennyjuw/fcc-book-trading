import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public firebaseAuth: AngularFireAuth,
              private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .then(value => {
        console.log('login work')
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
}
