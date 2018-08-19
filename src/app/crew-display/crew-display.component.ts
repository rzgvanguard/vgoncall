import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CrewListData } from '../entities/CrewListData';
import { CrewApiService } from '../services/crew-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crew-display',
  templateUrl: './crew-display.component.html',
  styleUrls: ['./crew-display.component.css']
})
export class CrewDisplayComponent implements OnInit {

  @Input() crew: CrewListData;
  @Output() buttonClick = new EventEmitter();

  constructor(private crewService: CrewApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crew = this.crewService.testSingle('');

  }

  viewCrewProfile() {
    this.buttonClick.emit(this.crew.CrewId);
    console.log(this.route.snapshot.params['id']);
  }
}
