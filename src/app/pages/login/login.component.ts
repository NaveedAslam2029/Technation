import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/service/service/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: any;
  password: any;
  data: any;
  company_name: any;
  userid: any;
  isEmail: any;
  isPassword: any;
  constructor(private service: LoginService , private routes: Router,  public auth: AuthService) {}
  ngOnInit() {
    this.getRememberMeData();
  }
  getRememberMeData() {
    const data = JSON.parse(localStorage.getItem('data'));
    this.email = data.email;
    this.password = data.password;
  }
  login() {
     this.auth.invalid = false;
     this.service.loading = true;
    this.auth.login(this.email, this.password);
     console.log(this.email, this.password );
  }
  ngOnDestroy() {
    this.auth.invalid = false;
  }
  register() {
    this.routes.navigate(['/register']);
  }
  forget() {
    this.routes.navigate(['./ForgetPassword']);
  }
  validate(data) {
    if (data = 'email') {
      this.isEmail = true;
    } else if (data = 'password') {
      this.isPassword = true;
    }
  }
  rememberMe() {
    localStorage.setItem('data', JSON.stringify({email: this.email, password: this.password}));
  }
}
