import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { HomepageDataService } from './homepage-data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AngleUpIcon } from 'primeng/icons/angleup';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { UsefulLinksComponent } from '../useful-links/useful-links.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DividerModule,
    RouterLink,
    CommonModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
    ChipModule,
    UsefulLinksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pageData: any;
  newsArticles: any;
  visaTypes: any;
  error: any;

  slides: any;
  videoMedia: any;
  imageMedia: any;
  testimonials: any;
  public environment = environment;

  toRotate: any;
  el: any;
  loopNum: any;
  period: any;
  txt: any;
  isDeleting: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit() {
    this.fetchPageData('home');
    this.fetchNewsArticles();
    this.fetchVisaTypes();

    // window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        this.txtType(elements[i], JSON.parse(toRotate), period);
      }
      // }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    }
  }

  txtType(el: any, toRotate: any, period: any) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData);
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  fetchNewsArticles() {
    this.homePageDataService.getNewsArticles().subscribe({
      next: (response) => {
        this.newsArticles = response.data;
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  fetchVisaTypes() {
    this.homePageDataService.getVisaTypes().subscribe({
      next: (response) => {
        this.visaTypes = response.data;
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  destructureDataFromPageData() {
    this.pageData.blocks.map((block: any) => {
      switch (block.__component) {
        case 'blocks.slider':
          this.slides = block.slide;
          break;

        case 'blocks.media':
          this.videoMedia = block.content.filter(
            (x: any) => x.media_type === 'Video'
          );
          this.imageMedia = block.content.filter(
            (x: any) => x.media_type === 'Image'
          );
          break;

        case 'blocks.testimonials':
          this.testimonials = block.review;
          break;

        default:
          break;
      }
    });
  }
}
