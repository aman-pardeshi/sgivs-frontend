import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';

@Component({
  templateUrl: './faq.component.html',
})
export class FaqComponent implements OnInit {
  pageData: any;
  items: any[] = [];
  error: any;

  activeIndex: number = 0;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit(): void {
    this.fetchPageData('faq-uae');
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.items = this.pageData.blocks;
        // this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData);
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  loadAnswer(answer: any[]) {
    return convertToHtml(answer);
  }

  changeItem(i: number) {
    this.activeIndex = i;
  }
}
