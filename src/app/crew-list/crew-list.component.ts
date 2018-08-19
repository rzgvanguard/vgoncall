import { Component, OnInit } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  private crewMembers: CrewListData[];
  // private crew: CrewListData;
  constructor(private apiService: CrewApiService) {

    this.crewMembers = new Array<CrewListData>();

  }

  ngOnInit() {
    this.crewMembers = this.apiService.test();
    // console.log(this.crewMembers);
    // this.crew = new CrewListData();

    // // const crewData = new CrewListData();
    // this.crew.CrewId = '1234';
    // this.crew.FirstName = 'first';
    // this.crew.LastName = 'last';
    // this.crew.ManagerName = 'Michael Cavallo';
    // this.crew.PhoneNumber = '6096096060';
    // this.crew.OnCallEndDate = 'Jan 8 2018';
    // this.crew.OnCallStartDate = 'Jan 1 2018';

    // // console.log(crewData);
  }

  redirectToCrewProfile(data) {
    // console.log(data);
  }

}




