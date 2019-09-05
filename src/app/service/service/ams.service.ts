import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AmsService {
  expid: any;
  name: any;
  expensedate: any;
  item_name: any;
  amount: any;
  invoiceid: any;
  chekval: any;
  constructor(private http: HttpClient, private modalService: NgbModal, public logService: LoginService) {
    this.chekval = JSON.parse(localStorage.getItem('currentUser'));
   }
   editMode: Boolean = false;
  company_name: any;
  userid: any;
  data: any;
  itemid: any;
  email: any;
  password: any;
  user: any;
  url = 'https://sum-invoice-app.herokuapp.com';
  userId: any;
  contactid: any;
// item CRUDs
getitem() {
  this.user = this.logService.userid;
  // tslint:disable-next-line: label-position
return this.http.get(this.url + '/item/get-all');
}
 getitemById(id) {
console.log(id, 'item id at ams service received');
 return this.http.get(this.url + '/item/get/' + id);
 }
 additem(item) {
  console.log(item, 'this is asset at service');
  return this.http.post(this.url + '/item/new', + item);
  }
updateitem(data) {
  this.itemid = data.itemid;
 console.log(this.itemid, 'update  item through service');
 const val = {
  item_type : data.type,
  item_name: data.name,
  item_quantity: data.quantity,
  unit: data.unit,
  sale_rate: data.salerate,
  sale_desc: data.description,
  saleaccount: data.saleaccount,
  purchase_rate: data.purchaserate,
  purchase_account: data.purchaseaccount,
  purchase_desc: data.purchasedesc,
  tax: data.tax
};
 return this.http.post(this.url + '/item/update/' + this.itemid + '', val);
  }
 deleteitem(id) {
this.itemid = id;
 console.log(id, 'item item recved for delete action');
  return this.http.post(this.url + '/item/delete/' + id + '', id);
 }
  getContacts() {
    return this.http.get('https://sum-invoice-app.herokuapp.com/finance/getByUserId/' + this.chekval + '');
    }
     getcontactById(id) {
    console.log(id, 'Contact ID');
     return this.http.get('https://sum-invoice-app.herokuapp.com/finance/get/' + id + '');
     }
    editcontact(id) {
     console.log(id, 'update at item service');
     this.itemid = id;
      return this.http.post(this.url + '/item/update/', + id);
      }
     deletecontact(id) {
      this.contactid = id;
     console.log(id);
     // tslint:disable-next-line: no-unused-expression
     this.url + '/finance/delete/' + id + '', id;
    return this.http.post( this.url + '/finance/delete/' + id + '', id);
     }

// crud tax
gettax() {
  return this.http.get(this.url + '/tax/get-all');
}


// crud Invoices
getinvoice() {
  return this.http.get(this.url + '/invoice/get-all');
}
// CRUD expense
getexpense() {
  return this.http.get(this.url + '/expense/get-all');
}
addexpenses(expense) {
  console.log(expense, 'this is asset at service');
  return this.http.post(this.url + '/espense/new', + expense);
  }
  updateexpense(data) {
    this.expid = data.expid;
   console.log(this.itemid, 'update  item through service');
   const expensedata = {
    exp_name: this.name,
    exp_date: this. expensedate,
    item_name: this.item_name,
    item_id: this.itemid,
    exp_amount: this.amount
    // userId: his.userid
  };
   return this.http.post(this.url + '/expense/update/' + this.expid + '', expensedata);
    }
}
