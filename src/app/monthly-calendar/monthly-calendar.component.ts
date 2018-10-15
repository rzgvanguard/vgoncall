import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';
// import { CalendarEventImpl } from '../entities/CalendarEventImpl';
import { Router } from '@angular/router';
import { DateHelper } from '../helper/DateHelper';

@Component({
  selector: 'app-monthly-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.css']
})
export class MonthlyCalendarComponent implements OnInit {
  private crewMembers: CrewListData[];
  viewDate: Date = new Date();
  selectedMonth: Number = this.viewDate.getMonth() + 1;
  monthName: String;
  dateYear: number;
  dateHelper: DateHelper = new DateHelper();
  myView: String = 'month';
  clickedDate: Date;
  events = [];
  constructor(private apiService: CrewApiService, private router: Router) {
  this.monthName  = this.dateHelper.convertMonthToString(this.selectedMonth);
  this.dateYear = this.viewDate.getFullYear();
  }

  ngOnInit() {
    const employees = this.getOnCallEmployees();
    this.loadEmployeesOnCalendar(employees);
  }

  loadEmployeesOnCalendar(employeesOnCall: CrewListData[]) {
  }

  getDayViewForDate(date: Date) {
    // send to service to get all the info for the date, then pass that into a specific date
    // component - do this with dummy data first.
    this.apiService.test();
    const dateString = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
    this.router.navigate(['/DayView'], { queryParams: { date: date } });

    // console.log(date);
  }

  updateDate() {
    this.selectedMonth = this.viewDate.getMonth() + 1;
    this.monthName = this.dateHelper.convertMonthToString(this.selectedMonth);
    this.dateYear = this.viewDate.getFullYear();
  }

  getOnCallEmployees(): Array<CrewListData> {
    return this.apiService.test();
  }
}
