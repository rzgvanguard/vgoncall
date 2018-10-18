import { Component, OnInit } from '@angular/core';
import { ChangeRequestService } from '../services/change-request.service';
import { ChangeRequest } from '../entities/ChangeRequest';

@Component({
  selector: 'app-pending-change-requests',
  templateUrl: './pending-change-requests.component.html',
  styleUrls: ['./pending-change-requests.component.css']
})
export class PendingChangeRequestsComponent implements OnInit {

  private changeRequestList: ChangeRequest[];
  constructor(private changeService: ChangeRequestService) {
    this.changeRequestList = new Array<ChangeRequest>();
   }

  ngOnInit() {
    this.changeRequestList = this.changeService.getAllChangeRequests();
  }

}
