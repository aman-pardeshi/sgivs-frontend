import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { HomepageDataService } from '../home/homepage-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { convertToHtml } from '../visa-type/utils';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-attestation-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attestation-service.component.html',
  styleUrl: './attestation-service.component.scss',
})
export class AttestationServiceComponent implements OnInit {
  attestationId!: string;
  attestationService: any;
  currentTab: any;
  currentContent: SafeHtml | undefined;
  private routerSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private homePageDataService: HomepageDataService
  ) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange();
      }
    });

    const urlParams = this.router.url.split('/');
    this.attestationId = urlParams[urlParams.length - 1];
    this.fetchAttestationService();
  }

  onRouteChange() {
    this.attestationId =
      this.router.url.split('/')[this.router.url.split('/').length - 1];
    this.fetchAttestationService();
  }

  fetchAttestationService() {
    this.homePageDataService
      .getAttestationService(this.attestationId)
      .subscribe({
        next: (response) => {
          this.attestationService = response.data[0].attributes;
          console.log('data', this.attestationService);
          this.handleTabChange(0);
        },
        error: (err) => {
          console.log('error fetching', err);
        },
      });
  }

  handleTabChange(i: number) {
    this.currentTab = this.attestationService.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = convertToHtml(this.currentTab.content_eoi);
  }
}
