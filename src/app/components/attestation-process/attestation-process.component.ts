import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageDataService } from '../home/homepage-data.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../shared/loader/loader.component';
import { convertToHtml } from '../visa-type/utils';

@Component({
  selector: 'app-attestation-process',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, LoaderComponent],
  templateUrl: './attestation-process.component.html',
  styleUrl: './attestation-process.component.scss'
})
export class AttestationProcessComponent implements OnInit {
  pageData: any;
  tabs: any[]
  currentTab: any;
  activeIndex: number = 0;

  constructor(
    private router: Router,
    private homePageDataService: HomepageDataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.fetchPageData('attestation-process-uae');
  }

  fetchPageData(slug: string) {
    this.spinner.show()
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
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
  }

  renderHtml(text: string) {
    return convertToHtml(text);
  }
}
