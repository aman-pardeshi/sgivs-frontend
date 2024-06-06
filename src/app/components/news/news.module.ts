import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [NewsRoutingModule],
  declarations: [NewsComponent],
})
export class NewsModule {}
