import { Component, OnInit } from '@angular/core';

declare const feather: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Feather Icon Js
	  feather.replace();
  }

}
