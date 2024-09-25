import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
  constructor(public layoutService: LayoutService,  private router: Router) {}

  get colorScheme(): string {
    return this.layoutService.config().colorScheme;
  }

  redirectToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
