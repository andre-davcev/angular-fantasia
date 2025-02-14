import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  NavigationEnd,
  Event,
} from '@angular/router';

import { AppProperties } from '@fantasia/app/models';

import { StateAppModel } from './app.state.model';
import { StateAppOptions } from './app.state.options';
import {
  ActionAppLoad,
  ActionAppNavToChild,
  ActionAppNavToHome,
  ActionAppWatchRouterEvents,
  ActionAppWatchMediaBreakpoints,
} from './app.actions';
import { AppList } from '@fantasia/app/constants';
import { App } from '@fantasia/app/enums';
import { AppService } from '@fantasia/app/services';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { tap } from 'rxjs/operators';
import { MaterialBreakpoint } from '@fantasia/app/enums/material-breakpoint.enum';
import { Injectable } from '@angular/core';

@State<StateAppModel>(StateAppOptions)
@Injectable()
export class StateApp {
  @Selector() static home(state: StateAppModel): boolean {
    return state.home;
  }
  @Selector() static loading(state: StateAppModel): boolean {
    return state.loading;
  }
  @Selector() static appLookup(
    state: StateAppModel
  ): Record<App, AppProperties> {
    return state.apps;
  }
  @Selector() static apps(state: StateAppModel): Array<AppProperties> {
    const appLookup: Record<App, AppProperties> = StateApp.appLookup(state);

    return AppService.toArray(appLookup);
  }
  @Selector() static mediaChanges(state: StateAppModel): Array<MediaChange> {
    return state.mediaChanges;
  }
  @Selector() static mediaChangesFound(state: StateAppModel): boolean {
    return StateApp.mediaChanges(state).length > 0;
  }
  @Selector() static mediaBreakpoint(
    state: StateAppModel
  ): MaterialBreakpoint | undefined {
    return StateApp.mediaChangesFound(state)
      ? (state.mediaChanges[0].mqAlias as MaterialBreakpoint)
      : undefined;
  }

  constructor(
    private router: Router,
    private app: AppService,
    private mediaObserver: MediaObserver
  ) {}

  public ngxsOnInit(context: StateContext<StateAppModel>) {
    context.dispatch([
      new ActionAppLoad(AppList),
      new ActionAppWatchRouterEvents(),
      new ActionAppWatchMediaBreakpoints(),
    ]);
  }

  @Action(ActionAppLoad)
  loadApps(
    { patchState }: StateContext<StateAppModel>,
    { payload }: ActionAppLoad
  ) {
    const apps: Record<string, AppProperties> =
      this.app.generateLookup(payload);

    patchState({ apps });
  }

  @Action(ActionAppNavToChild)
  navigateToChildApp(
    { getState, patchState, dispatch }: StateContext<StateAppModel>,
    { payload }: ActionAppNavToChild
  ) {
    const appProperties: AppProperties = StateApp.appLookup(getState())[
      payload as App
    ];

    if (appProperties) {
      if (appProperties.link != null) {
        window.open(appProperties.link);
      } else {
        patchState({ home: false });
        dispatch(new Navigate([payload]));
      }
    }
  }

  @Action(ActionAppNavToHome)
  navigateToHome({ patchState, dispatch }: StateContext<StateAppModel>) {
    patchState({ home: true });

    dispatch(new Navigate(['/']));
  }

  @Action(ActionAppWatchRouterEvents, { cancelUncompleted: true })
  watchRouterEvents({ patchState }: StateContext<StateAppModel>) {
    return this.router.events.pipe(
      tap((event: Event) => {
        if (event instanceof NavigationStart) {
          patchState({
            home: event.url === `/${App.Home}` || event.url === '/',
          });
          patchState({ loading: true });
        } else if (
          event instanceof NavigationCancel ||
          event instanceof NavigationError ||
          event instanceof NavigationEnd
        ) {
          patchState({ loading: false });
        }
      })
    );
  }

  @Action(ActionAppWatchMediaBreakpoints, { cancelUncompleted: true })
  watchMediaBreakpoints({ patchState }: StateContext<StateAppModel>) {
    const mqAlias: string | undefined = (
      Object.keys(MaterialBreakpoint) as Array<keyof typeof MaterialBreakpoint>
    )
      .map((key: keyof typeof MaterialBreakpoint) => MaterialBreakpoint[key])
      .find((alias: string) => this.mediaObserver.isActive(alias));

    patchState({ mediaChanges: [{ mqAlias } as MediaChange] });

    return this.mediaObserver
      .asObservable()
      .pipe(
        tap((mediaChanges: Array<MediaChange>) => patchState({ mediaChanges }))
      );
  }
}
