import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map, startWith, first} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CrewData } from '../entities/CrewData';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';
import { MatAutocompleteSelectedEvent } from '@angular/material';


@Component({
  selector: 'app-crew-change-request',
  templateUrl: './crew-change-request.component.html',
  styleUrls: ['./crew-change-request.component.css']
})

export class CrewChangeRequestComponent implements OnInit {

  crewControl = new FormControl();
  filteredCrew: Observable<CrewListData[]>;
  startDate: Date;
  endDate: Date;
  minDate: Date;
  selectedCrew: CrewListData;
  crewMembers: CrewListData[];

  dateFilter = (d: Date): boolean => {
    return d > this.minDate;
  }

  constructor(private crewService: CrewApiService) {
    this.filteredCrew = this.crewControl.valueChanges
    .pipe(
      startWith(''),
      map(crew => crew ? this._filterCrew(crew) : this.crewMembers.slice())
      );
   }

  private _filterCrew(value: string): CrewListData[] {
    console.log('value is ' + value);
    const filterValue = value.toLowerCase();

    const firstNameList = this.crewMembers.filter(c => c.FirstName.toLowerCase().indexOf(filterValue) === 0);
    const lastNameList = this.crewMembers.filter(c => c.LastName.toLowerCase().indexOf(filterValue) === 0);
    const crewIdList = this.crewMembers.filter(c => c.CrewId.toLowerCase().indexOf(filterValue) === 0);

    const retList = this.filterCrew(firstNameList, lastNameList, crewIdList);

    return retList;
  }

  ngOnInit() {
    // grab list of crew on your team
    // this.crewMembers = this.crewService.getAllCrew();
    this.crewMembers = this.crewService.test();
  }

  filterCrew(fnList: CrewListData[], lnList: CrewListData[], cIdList: CrewListData[]): CrewListData[] {
    const retList = new Array<CrewListData>();
    let combinedList = new Array<CrewListData>();
    combinedList = combinedList.concat(fnList, lnList, cIdList);

    for (let i = 0; i < combinedList.length; i++) {
      if (!this.searchIfCrewIdExists(combinedList[i].CrewId, retList)) {
        retList.push(combinedList[i]);
      }
    }
    return retList;
  }

  searchIfCrewIdExists(crewId: String, list: CrewListData[]): boolean {
    for (let i = 0; i < list.length; i++) {
      if (list[i].CrewId === crewId) {
        return true;
      }
    }
    return false;
  }

  getStartDate(input: MatDatepickerInputEvent<Date>) {
    this.startDate = input.value;
    this.minDate = input.value;
  }

  getEndDate(input: MatDatepickerInputEvent<Date>) {
    this.endDate = input.value;
  }

  // this is called through the mat option on selection change - this gives me access to the selected crew entire object
  getSelectedCrew(data: CrewListData) {
    this.selectedCrew = data;
    // console.log(data);
  }

  onSubmit() {
    console.log(this.crewControl);
  }
}
