import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '../shared/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, LoaderComponent],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.scss'
})
export class OtherServicesComponent implements OnInit {
  pageData: any;
  tabs: any[]
  currentTab: any;
  activeIndex: number = 0;

  constructor(private homePageDataService: HomepageDataService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.fetchPageData('services');
  }

  fetchPageData(slug: string) {
    this.spinner.show()
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0]?.attributes;
        this.destructureDataFromPageData();
        console.log('Data fetched successfully', this.pageData);
        this.spinner.hide()
      },
      error: (err) => {
        console.log('Error fetching', err);
        this.spinner.hide()
      },
    });
  }

  formatHtmlText(text: string) {
    return convertToHtml(text)
  }

  destructureDataFromPageData() {
    this.pageData.blocks?.map((block: any) => {
      switch (block.__component) {
        case 'blocks.tabs':
          this.tabs = block.tabs;
          this.handleTabChange(0)
          break;

        default:
          break;
      }
    })
  }

  handleTabChange(i: number) {
    this.activeIndex = i;
    this.currentTab = this.tabs[i]
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
