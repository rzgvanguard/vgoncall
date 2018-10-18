import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChangeRequestsComponent } from './pending-change-requests.component';

describe('PendingChangeRequestsComponent', () => {
  let component: PendingChangeRequestsComponent;
  let fixture: ComponentFixture<PendingChangeRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingChangeRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingChangeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
