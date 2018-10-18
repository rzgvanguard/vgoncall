import { Injectable } from '@angular/core';
import { ChangeRequest } from '../entities/ChangeRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {
  private restUrl: String = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) { }

  saveNewChangeRequest(cr: ChangeRequest) {

  }

  deleteChangeRequest(id: String) {

  }

  updateChangeRequest(id: String) {

  }

  getChangeRequestById(id: String): ChangeRequest {
    return null;
  }

  getAllChangeRequests(): ChangeRequest[] {
    let cr = new Array<ChangeRequest>();
    let req1 = new ChangeRequest();
    req1.ChangeRequestId = "123344";
    req1.CrewId = "12345";
    req1.StartDate = new Date(2018, 10, 17);
    req1.EndDate = new Date(2018, 10, 24);  
    req1.SwapReason = "I have another thing to do";
    cr.push(req1);

    let req2 = new ChangeRequest();
    req1.ChangeRequestId = "84938";
    req1.CrewId = "49284";
    req1.StartDate = new Date(2018, 10, 17);
    req1.EndDate = new Date(2018, 10, 24);  
    req1.SwapReason = "I am PTO this time";
    cr.push(req2);
    
    let req3 = new ChangeRequest();
    req1.ChangeRequestId = "99002";
    req1.CrewId = "85723";
    req1.StartDate = new Date(2018, 10, 17);
    req1.EndDate = new Date(2018, 10, 24);  
    req1.SwapReason = "I am sick";
    cr.push(req3);
    
    return cr;
  }
}
