import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeRequest } from '../entities/ChangeRequest';

@Component({
  selector: 'app-display-change-request',
  templateUrl: './display-change-request.component.html',
  styleUrls: ['./display-change-request.component.css']
})
export class DisplayChangeRequestComponent implements OnInit {

  @Input() changeRequest: ChangeRequest;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.changeRequest = new ChangeRequest();
    this.changeRequest.CrewId = "12345";
    this.changeRequest.StartDate = new Date(2018, 10, 17);
    this.changeRequest.EndDate = new Date(2018, 10, 24);
    this.changeRequest.SwapReason = "I have a preexisting commitment";
  }

  viewChangeRequest() {
    this.buttonClick.emit(this.changeRequest.ChangeRequestId);
    // console.log('crew id ' + this.route.snapshot.params['id']);
  }
}
