import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/service/service/ams.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewitemComponent } from '../newitem/newitem.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  allitem: any;

  constructor(private modalService: NgbModal,
    private amsService: AmsService) {
      this.amsService.getitem();
     }

  ngOnInit() {
    this.fetchitem();
  }
  fetchitem() {
    this. amsService.getitem()
    .subscribe(
      data => {
         console.log(data);
       this.allitem = data;
      }
  );
    }
  open() {

    const modalRef = this.modalService.open(NewitemComponent, { size: 'lg', backdrop : 'static'  });
   modalRef.componentInstance.name = 'New Asset';
   }
}
