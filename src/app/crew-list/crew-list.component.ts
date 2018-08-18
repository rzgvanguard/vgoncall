import { Component, OnInit } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewListData } from '../entities/CrewListData';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  private crewData: CrewListData[];
  constructor(private apiService: CrewApiService) {
    
    this.crewData = new Array<CrewListData>();

  }

  ngOnInit() {
    this.crewData = this.apiService.test();

    // const crewData = new CrewListData();
    // crewData.FirstName = 'first';
    // crewData.LastName = 'last';
    // crewData.ManagerName = 'Michael Cavallo';
    // crewData.PhoneNumber = '6096096060';
    // crewData.OnCallEndDate = 'Jan 8 2018';
    // crewData.OnCallStartDate = 'Jan 1 2018';

    // console.log(crewData);
  }

}




