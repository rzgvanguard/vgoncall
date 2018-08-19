import { TestBed, inject } from '@angular/core/testing';

import { CrewRouteActivatorService } from './crew-route-activator.service';

describe('CrewRouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewRouteActivatorService]
    });
  });

  it('should be created', inject([CrewRouteActivatorService], (service: CrewRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
