import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './service/service/auth.service';
import { LoginService } from './service/service/login.service';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';






const config = {
  apiKey: 'AIzaSyBDowWJg2HFOlYivSbA6oReSq4U7AEsZp4',
    authDomain: 'sum-invoice.firebaseapp.com',
    databaseURL: 'https://sum-invoice.firebaseio.com',
    projectId: 'sum-invoice',
    storageBucket: '',
    messagingSenderId: '277357172965',
    appId: '1:277357172965:web:d4605976be325698'
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,



  ],
  providers: [ LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
