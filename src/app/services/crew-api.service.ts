import { Injectable } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CrewListData } from '../entities/CrewListData';

@Injectable({
  providedIn: 'root'
})
export class CrewApiService {
  constructor() { }
// private http: HttpClient
  test(): Array<CrewListData> {
    console.log('api is being called');
    const crewArray = new Array<CrewListData>();
    const c1 = new CrewListData();
    c1.FirstName = 'hey';
    c1.LastName = 'hi';
    c1.ManagerName = 'Michael Cavallo';
    c1.PhoneNumber = '6096096060';
    c1.OnCallEndDate = 'Jan 8 2018';
    c1.OnCallStartDate = 'Jan 1 2018';
    c1.CrewId = '12345';

    const c2 = new CrewListData();

    c2.FirstName = 'Alex';
    c2.LastName = 'Jones';
    c2.ManagerName = 'Michael Cavallo';
    c2.PhoneNumber = '6096096060';
    c2.OnCallEndDate = 'Jan 8 2018';
    c2.OnCallStartDate = 'Jan 1 2018';
    c2.CrewId = '23456';

    const c3 = new CrewListData();

    c3.FirstName = 'Jack';
    c3.LastName = 'Son';
    c3.ManagerName = 'Michael Cavallo';
    c3.PhoneNumber = '6096096060';
    c3.OnCallEndDate = 'Jan 8 2018';
    c3.OnCallStartDate = 'Jan 1 2018';
    c3.CrewId = '34567';

    const c4 = new CrewListData();

    c4.FirstName = 'Lauren';
    c4.LastName = 'Haggle';
    c4.ManagerName = 'Michael Cavallo';
    c4.PhoneNumber = '6096096060';
    c4.OnCallEndDate = 'Jan 8 2018';
    c4.OnCallStartDate = 'Jan 1 2018';
    c4.CrewId = '45678';

    crewArray.push(c1, c2, c3, c4);

    console.log(crewArray);

    crewArray.find(c => c.CrewId === 'something');

    return crewArray;
  }

  getCrewOnCallForDate() {

  }

  testSingle(id: String): CrewListData {
    // this needs to eventually return the correct data not stale / static data
    // console.log('api being called with: ' + id);
    const c4 = new CrewListData();

    c4.FirstName = 'Lauren';
    c4.LastName = 'Haggle';
    c4.ManagerName = 'Michael Cavallo';
    c4.PhoneNumber = '6096096060';
    c4.OnCallEndDate = 'Jan 8 2018';
    c4.OnCallStartDate = 'Jan 1 2018';
    c4.CrewId = '45678';

    return c4;
  }


  saveNewCrew(crewData: any): boolean {
    // call the api to save the new crew member
    return true;

    // if the call is rejected - return false
  }
}
