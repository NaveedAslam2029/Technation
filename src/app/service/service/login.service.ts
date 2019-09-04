import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  company_name: any;
  userid: any;
  email: any;
  password: any;
  loading: Boolean = false;
  constructor(private http: HttpClient, private routes: Router, public  afAuth:  AngularFireAuth, ) { }
  check(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
        console.log(res.user.emailVerified);
        const data = {
          email: email,
          password: password
        };
        this.http.post('https://sum-invoice-app.herokuapp.com/user/login', data)
        // tslint:disable-next-line: no-shadowed-variable
        .subscribe( data => {
          console.log(data);
          localStorage.setItem('companyName', JSON.stringify(data[0].company_name));
           this.company_name = data[0].company_name;
           console.log(this.company_name);
            this.userid = data[0]._id;
            localStorage.setItem('currentUser', JSON.stringify(this.userid));
            console.log(this.userid);
        }, error => {
          alert('No user Exit against Email');
          // alert("Invalid Username and Password");
          console.log('Oooops!');
        });
        // this.mailstatus = res.user.emailVerified;
        // this.global.login(this.email, this.password,this.mailstatus);
      }, err => {
      alert(err);
    });
    });
  }
  signup( email, password, companyname, fullname, country, intial_cash) {
     const data = {
        email: email,
        password: password,
        company_name: companyname,
        user_name: fullname,
        country: country,
        intial_cash: intial_cash
    };

    this.http.post('https://sum-invoice-app.herokuapp.com/user/signup', data)
        .subscribe(response => {
          console.log('POST Response:', response);
          this.routes.navigate(['/login']);
        }, () => {
         console.log ('Oooops!');
        });
    }
    getcountry() {
      return this.http.get('https://restcountries.eu/rest/v2/all').pipe (
      );
    }
}
