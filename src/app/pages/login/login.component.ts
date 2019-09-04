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
  constructor(private service: LoginService , private routes: Router,  public auth: AuthService) {}
  ngOnInit() {
  }
  login() {
    this.auth.invalid = false;
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
}
