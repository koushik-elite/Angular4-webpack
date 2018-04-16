
import { Routes, RouterModule } from '@angular/router';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },    
];


// - Updated Export
export const routing = RouterModule.forRoot(routes);
