import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { selectRandomColor } from '../../visa-type/utils';
import { RouterLink } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxSpinnerModule, LoaderComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  newsArticles: any[];
  error: any;

  constructor(
    private homePageDataService: HomepageDataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.fetchNewsArticles();
  }

  fetchNewsArticles() {
    this.spinner.show();
    this.newsArticles = [];
    this.homePageDataService.getNewsArticles().subscribe({
      next: (response) => {
        this.newsArticles = response.data;
        console.log('Data fetched successfully', this.newsArticles);
        this.spinner.hide();
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
        this.spinner.hide();
      },
    });
  }

  generateRandomBorderColors() {
    return `border-${selectRandomColor()}`;
  }
}
