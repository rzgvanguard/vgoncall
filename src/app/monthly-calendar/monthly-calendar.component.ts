import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';
import { CalendarEventImpl } from '../entities/CalendarEventImpl';

@Component({
  selector: 'app-monthly-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.css']
})
export class MonthlyCalendarComponent implements OnInit {
  private crewMembers: CrewListData[];
  viewDate: Date = new Date();
  clickedDate: Date;
  events = [];
  constructor(private apiService: CrewApiService) { }

  ngOnInit() {
    const employees = this.getOnCallEmployees();
    this.loadEmployeesOnCalendar(employees);
  }

  loadEmployeesOnCalendar(employeesOnCall: CrewListData[]) {
  }

  getDate(date: Date) {
    console.log(date);
  }

  getOnCallEmployees(): Array<CrewListData> {
    return this.apiService.test();
  }
}
