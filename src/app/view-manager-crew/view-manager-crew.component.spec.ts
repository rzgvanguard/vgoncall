import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManagerCrewComponent } from './view-manager-crew.component';

describe('ViewManagerCrewComponent', () => {
  let component: ViewManagerCrewComponent;
  let fixture: ComponentFixture<ViewManagerCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManagerCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManagerCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
