import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-useful-links',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './useful-links.component.html',
  styleUrl: './useful-links.component.scss',
})
export class UsefulLinksComponent implements OnInit {
  pageData: any;
  links: any[] | undefined;
  error: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit() {
    this.fetchPageData('useful-links');
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.links = this.pageData.blocks.filter(
          (x: any) => x.__component === 'elements.button-link'
        );
      },
      error: (err) => {
        this.error = err;
      },
    });
  }
}
