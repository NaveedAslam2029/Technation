import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  invalid: Boolean = false;
  constructor( public router: Router, private service: LoginService, public afAuth: AngularFireAuth, private toastr: ToastrService) { }
  login(email: string, password: string) {
    this.service.loading = true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.invalid = false;
        this.service.loading = false;
        this.router.navigate(['/Dashboard']);
      })
      .catch(err => {
        });
        console.log('Something went wrong:');
        this.invalid = true;
        this.service.loading = false;
        this.router.navigate(['/login']);
  }
}
