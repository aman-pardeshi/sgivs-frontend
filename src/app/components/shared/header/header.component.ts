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
  }

  fetchHeaderLink() {
    this.homePageDataService.getHeaderData().subscribe({
      next: (response) => {
        this.items = response.data?.map((x: any) => x['attributes']);
      },
      error: (err) => {
        console.log('Error Fetching', err);
      },
    });
  }
}
