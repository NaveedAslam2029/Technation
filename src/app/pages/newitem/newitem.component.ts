import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmsService } from 'src/app/service/service/ams.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.scss']
})
export class NewitemComponent implements OnInit {
  name:   String;
  unit: number;
  quantity: number;
  salerate: number;
  saleaccount: number;
  tax: String;
  description: String;
  purchaserate: Number;
  purchaseaccount: Number;
  purchasedesc: String;
  type: String;
  item: any;
  data: any;
    saledesc: any;
  constructor(public http: HttpClient,
    private amsService: AmsService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  addAsset() {
    const data = {
      item_type : this.type,
      item_name: this.name,
      item_quantity: this.quantity,
      unit: this.unit,
      sale_rate: this.salerate,
      sale_desc: this.description,
      saleaccount: this.saleaccount,
      purchase_rate: this.purchaserate,
      purchase_account: this.purchaseaccount,
      purchase_desc: this.purchasedesc,
    };
    this.http.post('https://sum-invoice-app.herokuapp.com/item/create', data)
        .subscribe(response => {
          console.log('POST Response:', response);
          this.close();
        }, () => {
         console.log ('Oooops!');
        });
    }
 close() {
     this.activeModal.close();
   }
}
