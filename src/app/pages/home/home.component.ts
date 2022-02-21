import { Component, OnInit } from '@angular/core';

declare const feather: any, $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Feather Icon Js
	  feather.replace();

    // Odometer JS
    $('.odometer').appear(function(e: any) {
      var odo = $(".odometer");
      odo.each(function(this: any) {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });

    // Works Slides
    $('.works-slides').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      margin:30,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1500: {
          items: 4
        }
      }
    });
  }

}
