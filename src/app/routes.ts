import { Routes } from '@angular/router';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { AddCrewComponent } from './add-crew/add-crew.component';
import { Error404Component } from './errors/404/404.component';
import { CrewRouteActivatorService } from './services/crew-route-activator.service';
import { LoginComponent } from './login/login.component';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';
import { DayViewComponent } from './day-view/day-view.component';
import { CrewChangeRequestComponent } from './crew-change-request/crew-change-request.component';
import { PendingChangeRequestsComponent } from './pending-change-requests/pending-change-requests.component';
import { ManagerScreenComponent } from './manager-screen/manager-screen.component';

export const appRoutes: Routes = [
    { path: 'CrewList', component: CrewListComponent },
    { path: 'AddCrew', component: AddCrewComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'CrewList/:id', component: CrewDetailsComponent, canActivate: [CrewRouteActivatorService] },
    { path: 'WeeklyCalendar', component: WeeklyCalendarComponent },
    { path: 'MonthlyCalendar', component: MonthlyCalendarComponent },
    { path: 'CrewChangeRequest', component: CrewChangeRequestComponent },
    { path: 'PendingRequests', component: PendingChangeRequestsComponent },
    { path: 'ManagerConsole', component: ManagerScreenComponent },
    { path: 'DayView', component: DayViewComponent },
    { path: '', redirectTo: '/CrewList', pathMatch: 'full' },
    { path: '**', component: Error404Component },

];
