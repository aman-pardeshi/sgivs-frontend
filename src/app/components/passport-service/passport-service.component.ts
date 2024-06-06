import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-passport-service',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './passport-service.component.html',
  styleUrl: './passport-service.component.scss',
})
export class PassportServiceComponent implements OnInit {
  passportId!: string;
  passportService: any;
  currentTab: any;
  currentContent: SafeHtml | undefined;
  private routerSubscription: Subscription | undefined;

  applicationTypes: MenuItem[] | undefined;
  selectedApplicationType: MenuItem | undefined;
  serviceTypes: MenuItem[] | undefined;
  selectedServiceType: MenuItem | undefined;
  bookletType: MenuItem[] | undefined;
  selectedBookletType: MenuItem | undefined;
  ageGroups: MenuItem[] | undefined;
  selectedAgeGroup: MenuItem | undefined;

  fee: number | undefined;

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
    this.passportId = urlParams[urlParams.length - 1];

    console.log('pass', this.passportId);
    this.fetchPassportService();

    this.applicationTypes = [
      {
        label: 'Renewal/Reissue on expiry of validity/Exhaustion of visa pages',
        value: '',
      },
      { label: 'New passport in lieu of LossDamage of passport', value: '' },
      {
        label:
          'Registration of Birth/ Issue of Birth certificate and passport for a child born in UAE',
        value: '',
      },
      { label: 'Police clearance certificate', value: '' },
      { label: 'NRI certificates (For educational purpose only)', value: '' },
      {
        label:
          'Certification of Date/Place of birth, Marital status, Spouse name etc. as per entry in passport',
        value: '',
      },
      {
        label:
          'Extract from birth register (Issue of those who are born in UAE and birth has been registered in Consulate General of India, Dubai)',
        value: '',
      },
      { label: 'Certificate of Genuineness of Indian Passport', value: '' },
      { label: 'SVP Passport (Short Validity Passport)', value: '' },
    ];

    this.serviceTypes = [
      {
        label: 'Normal',
        value: '',
      },
      {
        label: 'Tatkal',
        value: '',
      },
    ];

    this.bookletType = [
      {
        label: 'Normal',
        value: '',
      },
      {
        label: 'Jumbo',
        value: '',
      },
    ];

    this.ageGroups = [
      {
        label: '18 Years and Above',
        value: '',
      },
      {
        label: 'Between 15 to 18 Years',
        value: '',
      },
      {
        label: 'Below 18 Years',
        value: '',
      },
    ];
  }

  onRouteChange() {
    const urlParams = this.router.url.split('/');
    this.passportId = urlParams[urlParams.length - 1];
    this.fetchPassportService();
  }

  fetchPassportService() {
    this.homePageDataService.getPassportService(this.passportId).subscribe({
      next: (response) => {
        this.passportService = response?.data[0].attributes;
        console.log('data', this.passportService);
        this.handleTabChange(0);
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  handleTabChange(i: number) {
    this.currentTab = this.passportService.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = convertToHtml(this.currentTab.content_eoi);
  }

  calculateFee() {
    if (
      this.selectedApplicationType &&
      this.selectedServiceType &&
      this.selectedBookletType &&
      this.selectedAgeGroup
    ) {
      this.fee = 859;
    }
  }
}
