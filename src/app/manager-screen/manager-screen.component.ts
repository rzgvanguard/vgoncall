import { Component, OnInit } from '@angular/core';
import { CrewApiService } from '../services/crew-api.service';
import { CrewData } from '../entities/CrewData';

@Component({
  selector: 'app-manager-screen',
  templateUrl: './manager-screen.component.html',
  styleUrls: ['./manager-screen.component.css']
})
export class ManagerScreenComponent implements OnInit {

  private crewTeam: Array<CrewData>;
  constructor(private crewService: CrewApiService) { }

  ngOnInit() {
    const managerId: String = 'test';
    this.crewTeam = this.crewService.getCrewByManager(managerId);
  }

}
