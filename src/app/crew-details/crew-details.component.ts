import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CrewApiService } from '../services/crew-api.service';
import { ActivatedRoute } from '@angular/router';
import { CrewListData } from '../entities/CrewListData';
import { DateHelper } from '../helper/DateHelper';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {

  crew: CrewListData;
  displayCrewSchedule: boolean;
  constructor(private crewService: CrewApiService, private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.crew = this.crewService.getCrewById(this.route.snapshot.params['id']);
    this.crew.DaysOnCallDates = new Array<Date>();
    this.crew.DaysOnCallList = new Array<number>();
    this.crew.DaysOnCallList.push(1, 2, 3, 4, 5, 6, 7);
    this.crew.DaysOnCallList.forEach(day => {
      this.crew.DaysOnCallDates.push(DateHelper.dateFromDay(new Date().getFullYear(), day));
    });
    // console.log(this.crew);
  }

  viewCrewSchedule() {
    // console.log(this.route.snapshot.params['id']);
    this.displayCrewSchedule = true;
  }

  deleteCrew(id: String) {

  }

  confirmDeleteCrew(id: String) {
    this.crewService.deleteCrew(id);
  }
}
