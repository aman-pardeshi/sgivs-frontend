import { Component } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-experience.component.html',
  styleUrl: './customer-experience.component.scss',
})
export class CustomerExperienceComponent {
  pageData: any;
  items: any[] = [];
  error: any;
  activeIndex: number = 0;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit(): void {
    this.fetchPageData('customer-experience');
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.items = this.pageData.blocks;
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
