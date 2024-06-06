import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { ArticleComponent } from './article/article.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: 'News' },
        component: NewsComponent,
        children: [
          {
            path: 'articles',
            component: ArticleComponent,
          },
          {
            path: 'article/:slug',
            data: { breadcrumb: 'Article' },
            component: SinglearticleComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
