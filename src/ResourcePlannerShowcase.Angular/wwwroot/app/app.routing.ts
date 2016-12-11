import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './team/team.component';



const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/team',
        pathMatch: 'full'
    },
    {
        path: 'team',
        component: TeamComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
