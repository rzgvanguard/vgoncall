import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CrewApiService } from './crew-api.service';

@Injectable({
  providedIn: 'root'
})
export class CrewRouteActivatorService implements CanActivate {

  constructor(private crewService: CrewApiService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const crewExists = !!this.crewService.getCrewById(route.params['id']);

    if (!crewExists) {
      this.router.navigate(['/404']);
    }
    return crewExists;
  }
}
