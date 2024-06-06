import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from '../../home/homepage-data.service';
import { Router } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
import { convertToHtml } from '../../visa-type/utils';

@Component({
  selector: 'app-singlearticle',
  standalone: true,
  imports: [],
  templateUrl: './singlearticle.component.html',
  styleUrl: './singlearticle.component.scss',
})
export class SinglearticleComponent implements OnInit {
  articleId!: string;
  article: any;
  articleContent: SafeHtml | undefined;

  constructor(
    private router: Router,
    private homePageDataService: HomepageDataService
  ) {}

  ngOnInit() {
    const urlParams = this.router.url.split('/');
    this.articleId = urlParams[urlParams.length - 1];

    this.fetchNewsArticle();
  }

  fetchNewsArticle() {
    this.homePageDataService.getNewsArticle(this.articleId).subscribe({
      next: (response) => {
        this.article = response.data[0].attributes;
        this.renderContent();
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  renderContent() {
    this.articleContent = convertToHtml(this.article?.content);
  }
}
