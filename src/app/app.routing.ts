import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { RecursoComponent } from './components/recurso.component';

const appRoutes: Routes = [
    {path : '',component: HomeComponent},
    {path: 'recurso',component:RecursoComponent},
    {path: '**',component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);