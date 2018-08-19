import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewChangeRequestComponent } from './crew-change-request.component';

describe('CrewChangeRequestComponent', () => {
  let component: CrewChangeRequestComponent;
  let fixture: ComponentFixture<CrewChangeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewChangeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
