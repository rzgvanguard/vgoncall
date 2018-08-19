import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCrewCalendarComponent } from './view-crew-calendar.component';

describe('ViewCrewCalendarComponent', () => {
  let component: ViewCrewCalendarComponent;
  let fixture: ComponentFixture<ViewCrewCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCrewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCrewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
