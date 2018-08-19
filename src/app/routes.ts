import { Routes } from '@angular/router';
import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewDisplayComponent } from './crew-display/crew-display.component';

export const appRoutes: Routes = [
    { path: 'CrewList', component: CrewListComponent },
    { path: 'CrewList/:id', component: CrewDisplayComponent },
    { path: '', redirectTo: '/CrewList', pathMatch: 'full' },
];
