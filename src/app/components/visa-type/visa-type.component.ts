import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HomepageDataService } from '../home/homepage-data.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { convertToHtml } from './utils';
import { Subscription } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-visa-type',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxSpinnerModule, LoaderComponent],
  templateUrl: './visa-type.component.html',
  styleUrl: './visa-type.component.scss',
})
export class VisaTypeComponent implements OnInit {
  visaId!: string;
  visaType: any;
  currentTab: any;
  currentContent: SafeHtml | undefined;
  private routerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private homePageDataService: HomepageDataService,
  ) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    const urlParams = this.router.url.split('/');
    this.visaId = urlParams[urlParams.length - 1];

    this.fetchVisaType();
  }

  onRouteChange() {
    const urlParams = this.router.url.split('/');
    this.visaId = urlParams[urlParams.length - 1];
    this.fetchVisaType();
    window.scrollTo(0, 0); 
  }

  fetchVisaType() {
    this.homePageDataService.getVisaType(this.visaId).subscribe({
      next: (response) => {
        this.visaType = response.data[0].attributes;
        this.handleTabChange(0);
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  handleTabChange(i: number) {
    this.currentTab = this.visaType.tabs[i];
    // console.log('currentTab', this.currentTab);
    this.currentContent = convertToHtml(this.currentTab.content_eoi);
  }
}
