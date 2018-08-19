import { Routes } from '@angular/router';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDetailsComponent } from './crew-details/crew-details.component';

export const appRoutes: Routes = [
    { path: 'CrewList', component: CrewListComponent },
    { path: 'CrewList/:id', component: CrewDetailsComponent },
    { path: '', redirectTo: '/CrewList', pathMatch: 'full' },
];
