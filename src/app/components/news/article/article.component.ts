import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { selectRandomColor } from '../../visa-type/utils';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  newsArticles: any;
  error: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit() {
    this.fetchNewsArticles();
  }

  fetchNewsArticles() {
    this.homePageDataService.getNewsArticles().subscribe({
      next: (response) => {
        this.newsArticles = response.data;
        console.log('Data fetched successfully', this.newsArticles);
      },
      error: (err) => {
        this.error = err;
        console.log('Error fetching', err);
      },
    });
  }

  generateRandomBorderColors() {
    return `border-${selectRandomColor()}`;
  }
}
