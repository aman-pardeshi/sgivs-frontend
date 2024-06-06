import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { HomepageDataService } from '../../home/homepage-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule, MegaMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchinput') searchInput!: ElementRef;

  items: MenuItem[] | undefined;
  searchActive: boolean = false;

  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }

  deactivateSearch() {
    this.searchActive = false;
  }

  get logo(): string {
    const logo = 'assets/layout/images/logo.png';
    return logo;
  }

  constructor(
    private router: Router,
    private homePageDataService: HomepageDataService
  ) {}
  // getHeaderData
  ngOnInit() {
    this.fetchHeaderLink();
    this.items = [
      {
        label: 'Services',
        items: [
          {
            label: 'Passport',
            items: [
              {
                label:
                  'Passport Requirement As Per EOI, Abu Dhabi & Al Ain Residents',
                route: '',
              },
              {
                label:
                  'Passport Requirement As Per CGI, Dubai & Northern Emirates Residents',
                route: '',
              },
              {
                label: 'Global Entry Program (GEP)',
                route: '',
              },
              {
                label: 'Passport Fee',
                route: '',
              },
              {
                label: 'Photograph Specification',
                route: '',
              },
              {
                label: 'Other Application Form',
                route: '',
              },
              {
                label: 'Tatkal Service',
                route: '',
              },
            ],
          },
          {
            label: 'Visa',
            items: [
              {
                label: 'Student Visa',
                route: '',
              },
              {
                label: 'Visa Requirements for EOI (Abu Dhabi)',
                route: '',
              },
              {
                label: 'Visa Requirements for CGI (Dubai)',
                route: '',
              },
            ],
          },
          {
            label: 'OCI',
            route: '',
            items: [
              {
                label: '',
                route: '',
              },
            ],
          },
          {
            label: 'Attestation',
            route: '',
            items: [
              {
                label: '',
                route: '',
              },
            ],
          },
          {
            label: 'Consular',
            route: '',
            items: [
              {
                label: '',
                route: '',
              },
            ],
          },
        ],
      },
      {
        label: 'General Information',
        items: [
          {
            label: 'Public Holidays',
            route: '/public-holidays',
          },
          {
            label: 'Contact Us',
            route: '/contact-us',
          },
          {
            label: 'Customer Experience',
            route: '/customer-exerience',
          },
          {
            label: 'Security Regulation',
            route: '/security-regulations',
          },
          {
            label: 'Useful Links',
            route: '/useful-links',
          },
        ],
      },
      {
        label: 'Additional Services',
        command: () => {
          this.router.navigate(['/additional-services']);
        },
      },
      {
        label: 'News and Updates Services',
        command: () => {
          this.router.navigate(['/news/articles']);
        },
      },
      {
        label: 'Track Application',
        command: () => {
          this.router.navigate(['/installation']);
        },
      },
      {
        label: "FAQ's",
        command: () => {
          this.router.navigate(['/faq']);
        },
      },
    ];
  }

  fetchHeaderLink() {
    this.homePageDataService.getHeaderData().subscribe({
      next: (response) => {
        this.items = response.data?.map((x: any) => x['attributes']);
        console.log('first', this.items);
      },
      error: (err) => {
        console.log('Error Fetching', err);
      },
    });
  }
}
