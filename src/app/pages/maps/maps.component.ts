import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { AmsService } from '../../service/service/ams.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  listContacts: any;
  constructor(private modalService: NgbModal, private amsService: AmsService) {
    this.amsService.getContacts();
   }
  ngOnInit() {
    this.fetchContact();
  }
  fetchContact() {
    this. amsService.getContacts()
    .subscribe(
      Contactsdata => {
    console.log(Contactsdata);
    this.listContacts = Contactsdata;
});
}
  open() {
    const modalRef = this.modalService.open(NewContactComponent, { size: 'lg', backdrop : 'static'  });
   modalRef.componentInstance.name = 'New Asset';
   }
}
