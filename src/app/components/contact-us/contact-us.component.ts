import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { convertToHtml } from '../visa-type/utils';
import { DividerModule } from 'primeng/divider';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '../shared/loader/loader.component';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, DividerModule, NgxSpinnerModule, LoaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  emirates: any;
  selectedEmirate: any;
  address: SafeHtml | undefined;
  content: SafeHtml | undefined;
  mapEmbedLink: SafeHtml | undefined;
  centers: any;
  selectedCenter: any;
  activeIndex: number = 0;
  private routerSubscription: Subscription | undefined;

  constructor(
    private homePageDataService: HomepageDataService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchCenters();

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  fetchCenters() {
    this.spinner.show();
    this.homePageDataService.getCenterApi().subscribe({
      next: (response) => {
        this.centers = response.data;
        console.log(this.centers)
        this.handleCenterChange(0);
        this.spinner.hide();
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  renderMapLink(link: any) {

    if (!link) {

      return;
    }

    const renderedLink = this.sanitizer.bypassSecurityTrustResourceUrl(link)
    return renderedLink;
  }

  handleCenterChange(i: number) {
    this.spinner.show();
    this.activeIndex = i;
    this.selectedCenter = this.centers[i];
    console.log(this.selectedCenter)
    this.spinner.hide();
  }

  renderHtml(text: string) {
    return convertToHtml(text);
  }
}
