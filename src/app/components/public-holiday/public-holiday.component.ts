import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { HomepageDataService } from '../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-public-holiday',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule, TableModule],
  templateUrl: './public-holiday.component.html',
  styleUrl: './public-holiday.component.scss',
})
export class PublicHolidayComponent implements OnInit {
  centers: any;
  selectedCenter: any;
  currentHolidayList: any;

  constructor(private homePageDataService: HomepageDataService) {}

  ngOnInit(): void {
    this.fetchCentersAndHolidays();
  }

  fetchCentersAndHolidays() {
    this.homePageDataService.getCentersWithHolidays().subscribe({
      next: (response) => {
        this.centers = response.data;
        console.log('error fetching', this.centers);
      },
      error: (err) => {
        console.log('error fetching', err);
      },
    });
  }

  onChangeHandler() {
    this.currentHolidayList = this.centers.filter(
      (center: any) =>
        center.attributes.title === this.selectedCenter.attributes.title
    )[0].attributes.public_holidays_and_closures.data;
  }
}
