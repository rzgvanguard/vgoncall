import { TestBed, inject } from '@angular/core/testing';

import { CrewApiService } from './crew-api.service';

describe('CrewApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewApiService]
    });
  });

  it('should be created', inject([CrewApiService], (service: CrewApiService) => {
    expect(service).toBeTruthy();
  }));
});
