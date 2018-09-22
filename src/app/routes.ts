import { Routes } from '@angular/router';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { AddCrewComponent } from './add-crew/add-crew.component';
import { Error404Component } from './errors/404/404.component';
import { CrewRouteActivatorService } from './services/crew-route-activator.service';
import { LoginComponent } from './login/login.component';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';

export const appRoutes: Routes = [
    { path: 'CrewList', component: CrewListComponent },
    { path: 'AddCrew', component: AddCrewComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'CrewList/:id', component: CrewDetailsComponent, canActivate: [CrewRouteActivatorService] },
    { path: 'WeeklyCalendar', component: WeeklyCalendarComponent },
    { path: 'MonthlyCalendar', component: MonthlyCalendarComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/CrewList', pathMatch: 'full' },
];
