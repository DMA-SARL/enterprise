import { Component, OnInit } from '@angular/core';

declare const feather: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Feather Icon Js
	  feather.replace();
  }

}
