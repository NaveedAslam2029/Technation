import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/service/service/ams.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewblogComponent } from '../newblog/newblog.component';
import { ViewblogComponent } from '../viewblog/viewblog.component';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  allblog: any;

  constructor(private modalService: NgbModal,
    private amsService: AmsService) { }

  ngOnInit() {
    this.fetchitem();
  }
  open() {

    const modalRef = this.modalService.open(NewblogComponent, { size: 'lg', backdrop : 'static'  });
   modalRef.componentInstance.name = 'New Asset';
   }
   fetchitem() {
    this. amsService.getblogs()
    .subscribe(
      data => {
         console.log(data);
       this.allblog = data;
      }
  );
    }
    edit(blogid) {
       this.amsService.blogid = blogid;
          console.log(blogid, 'blog id in list component received');
        const modalRef = this.modalService.open(ViewblogComponent, { size: 'lg', backdrop: 'static'});
         modalRef.componentInstance.name = 'Update item'; }
}
