import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '../shared/loader/loader.component';
import { convertToHtml } from '../visa-type/utils';

@Component({
  selector: 'app-useful-links',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NgxSpinnerModule, LoaderComponent],
  templateUrl: './useful-links.component.html',
  styleUrl: './useful-links.component.scss',
})
export class UsefulLinksComponent implements OnInit {
  pageData: any;
  links: any[] | undefined;
  error: any;

  constructor(private homePageDataService: HomepageDataService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.fetchPageData('useful-links-uae');
  }

  fetchPageData(slug: string) {
    this.spinner.show();
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.links = this.pageData.blocks.filter(
          (x: any) => x.__component === 'elements.button-link'
        );
        this.spinner.hide();
      },
      error: (err) => {
        this.error = err;
        this.spinner.hide();
      },
    });
  }


  renderHtml(text: string) {
    return convertToHtml(text);
  }
}
