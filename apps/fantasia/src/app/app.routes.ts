import { Routes } from '@angular/router';

import { App } from './enums';

export const AppRoutes: Routes = [
  // { path: '**', component: ErrorComponent }
  {
    path: App.Root,
    loadChildren: () => import('@fantasia/app').then((m) => m.MainComponentModule),
  },
  {
    path: App.Resume,
    loadChildren: () => import('@fantasia/app').then((m) => m.ResumePageComponentModule)
  },
  {
    path: App.Starcraft,
    loadChildren: () => import('@fantasia/app').then((m) => m.StarcraftPageComponentModule)
  }
];
