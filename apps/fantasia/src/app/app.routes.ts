import { Routes } from '@angular/router';

import { App } from './enums';

export const AppRoutes: Routes = [
  // { path: '**', component: ErrorComponent }
  {
    path: App.Root,
    loadChildren: () =>
      import('@fantasia/app').then((m) => m.MainComponentModule),
  },
  {
    path: App.Memories,
    loadChildren: () =>
      import('@fantasia/app').then((m) => m.MemoriesPageComponentModule),
  },
  {
    path: App.Art,
    loadChildren: () =>
      import('@fantasia/app').then((m) => m.ArtPageComponentModule),
  },
];
