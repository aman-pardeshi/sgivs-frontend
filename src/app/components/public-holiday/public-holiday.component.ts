import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { HomepageDataService } from '../home/homepage-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-public-holiday',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule, TableModule, NgxSpinnerModule, LoaderComponent],
  templateUrl: './public-holiday.component.html',
  styleUrl: './public-holiday.component.scss',
})
export class PublicHolidayComponent implements OnInit {
  selectedCenter: any;
  holidayList: any;

  constructor(private homePageDataService: HomepageDataService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.fetchCentersAndHolidays();
  }

  fetchCentersAndHolidays() {
    this.spinner.show()
    this.homePageDataService.getHolidays().subscribe({
      next: (response) => {
        this.holidayList = response.data;
        console.log('error fetching', this.holidayList);
        this.spinner.hide()
      },
      error: (err) => {
        console.log('error fetching', err);
        this.spinner.hide()
      },
    });
  }

  // onChangeHandler() {
  //   this.holidayList = this.centers.filter(
  //     (center: any) =>
  //       center.attributes.title === this.selectedCenter.attributes.title
  //   )[0].attributes.public_holidays_and_closures.data;
  // }
}
