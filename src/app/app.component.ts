import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

declare const $: any, feather: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'DMA Enterprise';
  lang = 'en';

  constructor(private translate: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
  }

  ngAfterViewInit(): void {
    this.initView();
  }

  ngOnInit() {
    this.setDefaultLang();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const childRoute = this.getChild(this.activatedRoute);
      childRoute.data.subscribe((data: any) => {
        this.translate.get(data.title).subscribe(value => {
          this.title = 'DMA - ' + value;
          this.titleService.setTitle(this.title);
        });
      });

      // Scroll to Top
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      // Feather Icon Js
	    feather.replace();
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

  changeLang(lang: string) {
    this.lang = lang;
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);
  }

  setDefaultLang() {
    this.lang = localStorage.getItem('language') || this.translate.getBrowserLang() || 'en';
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);
  }

  initView() {
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
