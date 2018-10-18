import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { NavComponent } from './nav/nav.component';
import { CrewDisplayComponent } from './crew-display/crew-display.component';
import { AddCrewComponent } from './add-crew/add-crew.component';
import { ViewCrewCalendarComponent } from './view-crew-calendar/view-crew-calendar.component';
import { ViewManagerCrewComponent } from './view-manager-crew/view-manager-crew.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { CrewChangeRequestComponent } from './crew-change-request/crew-change-request.component';
import { CrewApiService } from './services/crew-api.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { Error404Component } from './errors/404/404.component';
import { CrewRouteActivatorService } from './services/crew-route-activator.service';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';
import { DayViewComponent } from './day-view/day-view.component';
import { ManagerScreenComponent } from './manager-screen/manager-screen.component';
import { PendingChangeRequestsComponent } from './pending-change-requests/pending-change-requests.component';
import { DisplayChangeRequestComponent } from './display-change-request/display-change-request.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewListComponent,
    NavComponent,
    CrewDisplayComponent,
    AddCrewComponent,
    ViewCrewCalendarComponent,
    ViewManagerCrewComponent,
    WeeklyCalendarComponent,
    CrewChangeRequestComponent,
    CrewDetailsComponent,
    Error404Component,
    LoginComponent,
    MonthlyCalendarComponent,
    DayViewComponent,
    ManagerScreenComponent,
    PendingChangeRequestsComponent,
    DisplayChangeRequestComponent,
    DisplayChangeRequestListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CommonModule,
    CalendarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // mat imports
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  providers: [
    CrewApiService, CrewRouteActivatorService,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
