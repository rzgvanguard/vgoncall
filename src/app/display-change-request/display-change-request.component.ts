import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeRequest } from '../entities/ChangeRequest';
import { ChangeRequestService } from '../services/change-request.service';

@Component({
  selector: 'app-display-change-request',
  templateUrl: './display-change-request.component.html',
  styleUrls: ['./display-change-request.component.css']
})
export class DisplayChangeRequestComponent implements OnInit {

  @Input() changeRequest: ChangeRequest;
  @Output() buttonClick = new EventEmitter();

  constructor(private changeService: ChangeRequestService) { }

  ngOnInit() {

  }

  viewChangeRequest() {
    this.buttonClick.emit(this.changeRequest.ChangeRequestId);
    // console.log('crew id ' + this.route.snapshot.params['id']);
  }

  take(id: String) {
    // use the given id of the change request to delete it
    // pull the current user info from a cookie to then unassign the dates from the requester and assign them to the accepter
  }

  delete(id: String) {
    this.changeService.deleteChangeRequest(id);
  }
}
