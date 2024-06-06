import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
  menu: MenuItem[] = [];

  @ViewChild('searchinput') searchInput!: ElementRef;

  @ViewChild('menubutton') menuButton!: ElementRef;
  items: MenuItem[] | undefined;

  searchActive: boolean = true;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Visa Services',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
        ],
      },
      {
        label: 'General Information',
      },
      {
        label: 'Additional Services',
      },
      {
        label: 'News and Updates Services',
      },
      {
        label: 'Track Application',
      },

      {
        label: "FAQ's",
      },
    ];
  }

  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

  activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }

  deactivateSearch() {
    this.searchActive = false;
  }

  removeTab(event: MouseEvent, item: MenuItem, index: number) {
    this.layoutService.onTabClose(item, index);
    event.preventDefault();
  }

  get layoutTheme(): string {
    return this.layoutService.config().layoutTheme;
  }

  get colorScheme(): string {
    return this.layoutService.config().colorScheme;
  }

  get logo(): string {
    const logo = 'assets/layout/images/ivf-logo.png';
    return logo;
  }

  get tabs(): MenuItem[] {
    return this.layoutService.tabs;
  }
}
