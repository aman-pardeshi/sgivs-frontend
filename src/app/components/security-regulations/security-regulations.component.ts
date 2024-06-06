import { Component } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { convertToHtml } from '../visa-type/utils';

@Component({
  selector: 'app-security-regulations',
  standalone: true,
  imports: [],
  templateUrl: './security-regulations.component.html',
  styleUrl: './security-regulations.component.scss',
})
export class SecurityRegulationsComponent {
  pageData: any;
  content: any;
  error: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit() {
    this.fetchPageData('security-regulations');
  }

  fetchPageData(slug: string) {
    this.homePageDataService.getPageData(slug).subscribe({
      next: (response) => {
        this.pageData = response.data[0].attributes;
        this.loadContent();
        console.log('data', this.pageData);
      },
      error: (err) => {
        this.error = err;
      },
    });
  }

  loadContent() {
    this.content = convertToHtml(this.pageData.blocks[0].content);
  }
}
