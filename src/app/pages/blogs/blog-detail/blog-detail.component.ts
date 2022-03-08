import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../../_services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  next: any;
  prev: any;
  comments: any[] = [];
  id: number = 0;
  commentsCount: number = 0;

  constructor(private rest: RestService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.getBlog();
      this.getComments();
    });
  }

  getBlog() {
    this.rest.blogs.show(this.id, (response: any) => {
      this.blog = response.data;
      this.prev = response.prev;
      this.next = response.next;
      this.commentsCount = response.comments;
      console.log(this.prev);
    });
  }

  getComments() {
    this.rest.comments.index(this.id, (response: any) => {
      this.comments = response.data;
    });
  }

}
