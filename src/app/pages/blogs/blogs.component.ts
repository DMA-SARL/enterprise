import { RestService } from './../../_services/rest.service';
import { Component, OnInit } from '@angular/core';

declare const feather: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  data: any;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    // Feather Icon Js
	  feather.replace();

    this.rest.blogs.index((response: any) => {
      this.data = response;
      this.blogs = response.data;
    });
  }

  onPage(link: string, canLinked: boolean) {
    if (link) {
      this.rest.blogs.index((response: any) => {
        this.blogs = response.data;
        this.data = response;
      }, link);

      // Scroll to Top
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
