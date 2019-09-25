import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmsService } from 'src/app/service/service/ams.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.scss']
})
export class NewblogComponent implements OnInit {
  description: any;
  title: any;


  constructor(public http: HttpClient,
    private amsService: AmsService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  ngOnInit() { 
  }
  addblog() {
    const data = {
      post_title : this.title,
      post_desc: this.description,
    };
    this.http.post('http://localhost:3000/blog/create', data)
        .subscribe(response => {
          console.log('POST Response:', response);
        }, () => {
         console.log ('Oooops!');
        });
    }
  
}
