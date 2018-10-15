import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrewListData } from '../entities/CrewListData';
import { CrewApiService } from '../services/crew-api.service';
import { BaseCrewNewFormat } from '../entities/BaseCrewNewFormat';
import { CrewDataNewFormat } from '../entities/CrewDataNewFormat';


@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
  private onCallDate: Date;
  private onCallDateAsString: string;
  private crewMembers: CrewDataNewFormat[];
  private filteredCrewMembers: CrewDataNewFormat[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: CrewApiService
  ) { }

  ngOnInit() {

    this.getDateAndDateString();
    this.getCrewOnCall();
  // const sub = this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // Defaults to 0 if no query param provided.
    //     this.theDate = +params['page'] || 0;
    //   });
  }

  getDateAndDateString() {
    this.route.queryParams.subscribe(params => {
      this.onCallDate = new Date(params['date']);
  });

  // you can externalize this if you want
  const month = this.onCallDate.toLocaleString('en-us', { month: 'long' });
  const dayOfWeek = this.onCallDate.toLocaleString('en-us', { weekday: 'long' });
  const day = this.onCallDate.getDate();
  const year = this.onCallDate.getFullYear();

  let suffix = 'th';
  if (day % 10 === 1) {
    suffix = 'st';
  } else if (day % 10 === 2) {
    suffix = 'nd';
  } else if (day % 10 === 3) {
    suffix = 'rd';
  }
  console.log(dayOfWeek);
  this.onCallDateAsString = dayOfWeek + ', ' + month + ' ' + day + suffix + ', '
+ ' ' + year;
  console.log('date is: ' + this.onCallDate);
  }

  getCrewOnCall() {
    this.crewMembers = this.apiService.testBaseCrewList();
  }

  applyFilters() {
    const fName = document.getElementById('myInputFirstName').textContent;
    const lName = document.getElementById('myInputLastName');
    const productName = document.getElementById('myInputProductName');
    console.log('filters observed : ' + fName  + ' ' + lName + ' ' + productName);
    // this.filteredCrewMembers = this.crewMembers.filter(c => c.CrewPM.Manager.FirstName === fName);
  }

}
