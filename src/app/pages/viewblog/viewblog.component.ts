import { Component, OnInit } from '@angular/core';
import { AmsService } from 'src/app/service/service/ams.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.scss']
})
export class ViewblogComponent implements OnInit {
  blog: any;
  title: any;
  desc: any;
  comment: any;

  constructor(public http: HttpClient,
    public activeModal: NgbActiveModal,
    private amsService: AmsService) { }

  ngOnInit() {
    console.log('blog id ng onit' + this.amsService.blogid);
    this.getblogById();

    // this.http.get('http://localhost:3000/blog/get/' +  this.amsService.blogid)
    //   .subscribe(res => {
    //   console.log('POST Response:', res);
    //   // this.activeModal.close();
    //   console.log(res[0].post_desc);
    //   this.title = res[0].post_title;
    //   this.desc = res[0].post_desc;
    //   this.comment = res[0].comments;
    //   }, error => {
    //   console.log('Oooops!');
    //   });
  }
  getblogById() {
    this.amsService.getitemById(this.amsService.blogid)
    .subscribe((res: any) => {
      this.blog = res.data;
      this.title = res[0].post_title;
      this.desc = res[0].post_desc;
      this.comment = res[0].comments;

    });
  }
  updateitem() {
    const data = {
      post_title: this.title,
      post_desc : this.desc,
      comments: this.comment
      };
      this.http.post('https://blogtasktechnation.herokuapp.com/blog/update/' + this.amsService.blogid + '', data)
      .subscribe(response => {
      console.log('POST Response:', response);
      this.activeModal.close();
      }, error => {
      console.log('Oooops!');
      });
}
}
