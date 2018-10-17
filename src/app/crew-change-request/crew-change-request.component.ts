import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map, startWith, first} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CrewData } from '../entities/CrewData';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';

@Component({
  selector: 'app-crew-change-request',
  templateUrl: './crew-change-request.component.html',
  styleUrls: ['./crew-change-request.component.css']
})

export class CrewChangeRequestComponent implements OnInit {

  constructor(private crewService: CrewApiService) {
    this.filteredCrew = this.crewControl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterCrew(state) : this.crewMembers.slice())
    );
   }

  crewControl = new FormControl();
  filteredCrew: Observable<CrewListData[]>;

  crewMembers: CrewListData[];

  private _filterCrew(value: string): CrewListData[] {
    const filterValue = value.toLowerCase();

    let firstNameList = this.crewMembers.filter(c => c.FirstName.toLowerCase().indexOf(filterValue) === 0);
    let lastNameList = this.crewMembers.filter(c => c.LastName.toLowerCase().indexOf(filterValue) === 0);
    let crewIdList = this.crewMembers.filter(c => c.CrewId.toLowerCase().indexOf(filterValue) === 0);

    let retList = this.filterCrew(firstNameList, lastNameList, crewIdList);
    return retList;

    // return this.crewMembers.filter(c => c.FirstName.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    // grab list of crew on your team
    // this.crewMembers = this.crewService.getAllCrew();
    this.crewMembers = this.crewService.test();
  }

  filterCrew(fnList: CrewListData[], lnList: CrewListData[], cIdList: CrewListData[]): CrewListData[] {
    let retList = new Array<CrewListData>();
    let combinedList = new Array<CrewListData>();
    combinedList = combinedList.concat(fnList, lnList, cIdList);

    for(let i = 0; i < combinedList.length; i++) {
      if(!this.searchIfCrewIdExists(combinedList[i].CrewId, retList)) {
        retList.push(combinedList[i]);
      }
    }
    return retList;
  }

  searchIfCrewIdExists(crewId: String, list: CrewListData[]): boolean {
    for(let i = 0; i < list.length; i++) {
      if(list[i].CrewId == crewId) {
        return true;
      }
    }
    return false;
  }

  selectCrewById() {

  }
}
