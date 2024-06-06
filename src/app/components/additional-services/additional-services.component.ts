import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-additional-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './additional-services.component.html',
  styleUrl: './additional-services.component.scss',
})
export class AdditionalServicesComponent implements OnInit {
  pageData: any;
  tabs: any;
  currentTab: any;
  currentContent: any;
  error: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit() {
    this.fetchPageData('additional-services');
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.tabs = this.pageData.blocks;
        // this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData, this.tabs);
        this.handleTabChange(0);
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  handleTabChange(i: number) {
    this.currentTab = this.tabs[i];
    console.log('currentTab', this.currentTab);
    this.currentContent = convertToHtml(this.currentTab.content);
  }
}
