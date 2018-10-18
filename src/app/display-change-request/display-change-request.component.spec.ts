import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChangeRequestComponent } from './display-change-request.component';

describe('DisplayChangeRequestComponent', () => {
  let component: DisplayChangeRequestComponent;
  let fixture: ComponentFixture<DisplayChangeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChangeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
