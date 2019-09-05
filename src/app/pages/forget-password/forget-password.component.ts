import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/service/login.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/service/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  email: any;
  password: any;
  // tslint:disable-next-line: max-line-length
  constructor(private service: LoginService , private routes: Router, public  afAuth:  AngularFireAuth, public http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
  }
  forget() {
    this.auth.invalid = false;
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(this.email)
  .then(res => {
        resolve(res);
        this.sendEmailVerification();
        this.service.forget(this.email, this.password);
      }, err => alert(err));
    });
  }
  sendEmailVerification() {
    this.afAuth.authState.subscribe(user => {
        user.sendEmailVerification()
        .then(() => {
          // tslint:disable-next-line: no-unused-expression
          err => alert(err);
          console.log('email sent');
        });
      });
  }
}
