import { Injectable } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CrewListData } from '../entities/CrewListData';
import { BaseCrew } from '../entities/BaseCrew';
import { BaseCrewNewFormat} from '../entities/BaseCrewNewFormat';
import { CrewData } from '../entities/CrewData';
import { CrewDataNewFormat } from '../entities/CrewDataNewFormat';

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

  testBaseCrewList(): Array<CrewDataNewFormat> {
    const crewDataNewFormatArray = new Array<CrewDataNewFormat>();
    const c1 = new CrewDataNewFormat();
    const c1ArrOnCallDays = new Array<String>();
    c1ArrOnCallDays.push('10-10', '10-11', '10-12', '10-16', '10-17');
    c1.OnCallDays = c1ArrOnCallDays;
    c1.FirstName = 'Rohan';
    c1.CrewManager.FirstName = 'Sunny';

    const c2 = new CrewDataNewFormat();
    const c2ArrOnCallDays = new Array<String>();
    c2ArrOnCallDays.push('10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17',  '10-19', '10-27');
    c2.OnCallDays = c2ArrOnCallDays;
    c2.FirstName = 'Krishna';
    c2.CrewManager.FirstName = 'Sunny';


    const c3 = new CrewDataNewFormat();
    const c3ArrOnCallDays = new Array<String>();
    c3ArrOnCallDays.push('10-10', '10-11', '10-16', '10-18', '10-21',  '10-20', '10-22');
    c3.OnCallDays = c3ArrOnCallDays;
    c3.FirstName = 'Jeff';
    c3.CrewManager.FirstName = 'Sunny';

    const c4 = new CrewDataNewFormat();
    const c4ArrOnCallDays = new Array<String>();
    c4ArrOnCallDays.push('10-10', '10-11', '10-12', '10-16', '10-17', '10-18', '10-23', '10-24' );
    c4.OnCallDays = c4ArrOnCallDays;
    c4.FirstName = 'Suzie';
    c4.CrewManager.FirstName = 'Sarv';



    crewDataNewFormatArray.push(c1, c2, c3, c4);
    return crewDataNewFormatArray;

  }

  getBaseCrewListForDate(date: Date)
  {
    const dateAsString = date.getMonth() + '-' + date.getDay();
  }

}
