import { Route } from '@angular/router';

import { AppRoutes } from './app.routes';
import { App } from './enums';
import { MainComponentModule } from './components';
import { ResumePageComponentModule, StarcraftPageComponentModule } from './pages';

describe('RoutesApp', () => {
  it('should set route modules', () => {
    const routeRoot: Route | undefined = AppRoutes.find(
      (route: Route) => route.path === App.Root
    );
    const routeResume: Route | undefined = AppRoutes.find(
      (route: Route) => route.path === App.Resume
    );
    const routeStarcraft: Route | undefined = AppRoutes.find(
      (route: Route) => route.path === App.Starcraft
    );

    expect((routeRoot?.loadChildren as any)()).toBe(MainComponentModule);
    expect((routeResume?.loadChildren as any)()).toBe(ResumePageComponentModule);
    expect((routeStarcraft?.loadChildren as any)()).toBe(StarcraftPageComponentModule);
  });
});
