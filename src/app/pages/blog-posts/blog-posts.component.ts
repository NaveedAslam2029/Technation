import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/service/service/ams.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewblogComponent } from '../newblog/newblog.component';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private amsService: AmsService) { }

  ngOnInit() {
  }
  open() {

    const modalRef = this.modalService.open(NewblogComponent, { size: 'lg', backdrop : 'static'  });
   modalRef.componentInstance.name = 'New Asset';
   }

}
