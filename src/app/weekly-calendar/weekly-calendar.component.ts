import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';

@Component({
  selector: 'app-weekly-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  private crewMembers: CrewListData[];
  viewDate: Date = new Date();
  events = [];
  constructor(private apiService: CrewApiService) { }

  ngOnInit() {
    const employees = this.getOnCallEmployees();
    this.loadEmployeesOnCalendar(employees);

  }

  loadEmployeesOnCalendar(employeesOnCall: CrewListData[]) {
  }

  getOnCallEmployees(): Array<CrewListData> {
    return this.apiService.test();
  }
}
