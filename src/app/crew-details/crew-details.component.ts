import { Component, OnInit } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { ActivatedRoute } from '@angular/router';
import { CrewListData } from '../entities/CrewListData';

@Component({
  selector: 'app-crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css']
})
export class CrewDetailsComponent implements OnInit {

  crew: CrewListData;

  constructor(private crewService: CrewApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crew = this.crewService.testSingle('');
    console.log(this.crew);
  }

  viewCrewProfile() {
    console.log(this.route.snapshot.params['id']);
  }
}
