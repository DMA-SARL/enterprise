import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Testimonials Slides
    $('.testimonials-slides').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      items: 1,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
    });

    // Team Slides
    $('.team-slides').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1500: {
          items: 5
        }
      }
    });
  }

}
