import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

import { CrewListData } from '../entities/CrewListData';
import { CrewData } from '../entities/CrewData';
import { CrewTransferData } from '../entities/CrewTransferData';

@Injectable({
  providedIn: 'root'
})
export class CrewApiService {
  private tempCrewData: Array<CrewData>;
  private restUrl: String = "https://localhost:5001/api/";
  constructor(private httpClient: HttpClient) { }

  generateTempCrewData(): Array<CrewData> {
    this.tempCrewData = new Array<CrewData>();

    const c1 = new CrewData();

    c1.CrewId = '12345';

    const c2 = new CrewData();
    c2.CrewId = '23456';

    const c3 = new CrewData();
    c3.CrewId = '34567';

    const c4 = new CrewData();
    c4.CrewId = '45678';

    this.tempCrewData.push(c1, c2, c3, c4);

    return this.tempCrewData;
  }

// private http: HttpClient
  test(): Array<CrewListData> {
    const crewArray = new Array<CrewListData>();
    const c1 = new CrewListData();
    c1.FirstName = 'Yumi';
    c1.LastName = 'Yu';
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

    const c5 = new CrewListData();
    c5.FirstName = 'Arthor';
    c5.LastName = 'Ash';
    c5.ManagerName = 'Michael Cavallo';
    c5.PhoneNumber = '6096096060';
    c5.OnCallEndDate = 'Jan 8 2018';
    c5.OnCallStartDate = 'Jan 1 2018';
    c5.CrewId = '12345';

    const c6 = new CrewListData();
    c6.FirstName = 'Thor';
    c6.LastName = 'Ragnorok';
    c6.ManagerName = 'Michael Cavallo';
    c6.PhoneNumber = '6096096060';
    c6.OnCallEndDate = 'Jan 8 2018';
    c6.OnCallStartDate = 'Jan 1 2018';
    c6.CrewId = '12345';

    const c7 = new CrewListData();
    c7.FirstName = 'Peter';
    c7.LastName = 'Parker';
    c7.ManagerName = 'Michael Cavallo';
    c7.PhoneNumber = '6096096060';
    c7.OnCallEndDate = 'Jan 8 2018';
    c7.OnCallStartDate = 'Jan 1 2018';
    c7.CrewId = '12345';

    const c8 = new CrewListData();
    c8.FirstName = 'Brandon';
    c8.LastName = 'Bjergson';
    c8.ManagerName = 'Michael Cavallo';
    c8.PhoneNumber = '6096096060';
    c8.OnCallEndDate = 'Jan 8 2018';
    c8.OnCallStartDate = 'Jan 1 2018';
    c8.CrewId = '12345';
    
    const c9 = new CrewListData();
    c9.FirstName = 'Zack';
    c9.LastName = 'Johnson';
    c9.ManagerName = 'Michael Cavallo';
    c9.PhoneNumber = '6096096060';
    c9.OnCallEndDate = 'Jan 8 2018';
    c9.OnCallStartDate = 'Jan 1 2018';
    c9.CrewId = '12345';

    const c10 = new CrewListData();
    c10.FirstName = 'Akiko';
    c10.LastName = 'Yokosama';
    c10.ManagerName = 'Michael Cavallo';
    c10.PhoneNumber = '6096096060';
    c10.OnCallEndDate = 'Jan 8 2018';
    c10.OnCallStartDate = 'Jan 1 2018';
    c10.CrewId = '12345';

    crewArray.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);

    // console.log(crewArray);

    // crewArray.find(c => c.CrewId === 'something');

    return crewArray;
  }

  getCrewByManager(id: String): Array<CrewData> {
    return this.generateTempCrewData();
  }

  getCrewOnCallForDate(date: Date): Array<CrewData> {

    return null;
  }

  getAllCrew(): Array<CrewData> {
    let url = this.restUrl.concat("CrewData");
    let crewData: Array<CrewTransferData> = null;
    this.httpClient.get<CrewTransferData[]>(url).subscribe((data: CrewTransferData[]) =>
        // crewData = data
        console.log(data)
        );
    console.log(crewData);
      return null;
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


  saveNewCrew(crewData: CrewTransferData): boolean {
    // call the api to save the new crew member
    return true;

    // if the call is rejected - return false
  }
}
