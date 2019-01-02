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

  swapChangeRequests(requestId: String, accepterId: String) {
    // delete the existing change request - requestId
    // assign the new on call date to the accepter using their acepterId
  }

  getChangeRequestById(id: String): ChangeRequest {
    return null;
  }

  getAllChangeRequests(): ChangeRequest[] {
    const cr = new Array<ChangeRequest>();
    const req1 = new ChangeRequest();
    req1.ChangeRequestId = '123344';
    req1.CrewId = '12345';
    req1.CrewFirstName = 'Don';
    req1.CrewLastName = 'Glover';
    req1.StartDate = new Date(2018, 10, 17);
    req1.EndDate = new Date(2018, 10, 24);
    req1.SwapReason = 'I have another thing to do';
    cr.push(req1);

    const req2 = new ChangeRequest();
    req2.ChangeRequestId = '84938';
    req2.CrewId = '49284';
    req2.CrewFirstName = 'Kanye';
    req2.CrewLastName = 'West';
    req2.StartDate = new Date(2018, 10, 17);
    req2.EndDate = new Date(2018, 10, 24);
    req2.SwapReason = 'I am PTO this time';
    cr.push(req2);

    const req3 = new ChangeRequest();
    req3.ChangeRequestId = '99002';
    req3.CrewId = '85723';
    req3.CrewFirstName = 'Jay';
    req3.CrewLastName = 'Z';
    req3.StartDate = new Date(2018, 10, 17);
    req3.EndDate = new Date(2018, 10, 24);
    req3.SwapReason = 'I am sick';
    cr.push(req3);

    return cr;
  }
}
