import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

declare const feather: any, $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'DMA Enterprise';
  lang = 'fr';

  constructor(private translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) { }

  ngAfterViewInit(): void {
    this.setDefaultLang()
    this.initView();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const childRoute = this.getChild(this.activatedRoute);
      childRoute.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title);
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    }
    else {
      return activatedRoute;
    }
  }

  changeLang() {
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);
  }

  setDefaultLang() {
    const userLang = localStorage.getItem('language') || navigator.language;
    if (userLang.startsWith('en')) {
      this.lang = 'en';
    }

    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);
  }

  initView() {
    // Feather Icon Js
	  feather.replace();

    // Partner Slides
    $('.partner-slides').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 4
        },
        768: {
          items: 4
        },
        992: {
          items: 6
        }
      }
    });
  }
}
