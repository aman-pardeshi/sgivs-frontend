import { Component } from '@angular/core';
import { HomepageDataService } from '../home/homepage-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { convertToHtml } from '../visa-type/utils';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  centers: any;
  selectedCenter: any;
  address: SafeHtml | undefined;
  content: SafeHtml | undefined;
  mapEmbedLink: SafeHtml | undefined;

  constructor(
    private homePageDataService: HomepageDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fetchCenters();
  }

  fetchCenters() {
    this.homePageDataService.getCentersWithHolidays().subscribe({
      next: (response) => {
        this.centers = response.data;
        this.selectedCenter = this.centers[0];
        console.log('error fetching', this.centers[2].attributes.content);
        this.renderMapLink();
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  renderMapLink() {
    if (!this.selectedCenter.attributes.embed_map_link) {
      this.mapEmbedLink = '';
      return;
    }

    this.mapEmbedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.selectedCenter.attributes.embed_map_link
    );
  }

  handleCenterChange(i: number) {
    this.selectedCenter = this.centers[i];
    this.address = convertToHtml(this.selectedCenter.attributes.address);
    this.content = convertToHtml(this.selectedCenter.attributes.content);
    this.renderMapLink();
  }
}
