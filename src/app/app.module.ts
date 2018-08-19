import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
=======
import { Error404Component } from './errors/404/404.component';
import { CrewRouteActivatorService } from './services/crew-route-activator.service';
>>>>>>> 0cca9bdcde38248b6f28c0d5df5e7e9f94f68824

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, CalendarModule.forRoot()
    
  ],
  providers: [CrewApiService, CrewRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
