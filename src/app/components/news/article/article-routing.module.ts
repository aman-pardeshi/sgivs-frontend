import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ArticleComponent,
        children: [
          {
            path: '/:slug',
            component: ArticleComponent,
          },
        ],
      },
    ]),
  ],
})
export class ArticleRoutingModule {}
