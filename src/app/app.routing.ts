import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }
];
