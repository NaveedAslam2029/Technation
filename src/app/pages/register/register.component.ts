import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/service/login.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/service/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  companyname: any;
  fullname: any;
  country: any;
  data: any;
  countries: any;
  intial_cash = 0;
  countryname = [];
  // tslint:disable-next-line: max-line-length
  constructor(private service: LoginService , private routes: Router, public  afAuth:  AngularFireAuth, public http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    this.service.getcountry().subscribe(
      data => {
         console.log(data);
       this.countries = data;
    console.log(this.countries);
  });
  }
  register() {
    this.auth.invalid = false;
    // console.log(this.intial_cash);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then(res => {
        resolve(res);
        console.log(res.user.emailVerified);
        // this.verifystatus = res.user.emailVerified;
        this.sendEmailVerification();
        this.service.signup(this.email, this.password, this.companyname, this.fullname, this.country, this.intial_cash);
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
  loginbtn() {
    this.routes.navigate(['/login']);
  }
}
