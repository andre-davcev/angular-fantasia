import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import {
  Spectator,
  createComponentFactory,
  SpectatorService,
  SpectatorServiceFactory,
  createServiceFactory,
} from '@ngneat/spectator';

import {
  AppService,
  AppList,
  StateApp,
  ActionAppLoad,
  StateAppOptions,
  AppProperties,
  MenuItemComponent,
  MenuItemComponentModule,
} from '@fantasia/app';

describe('MenuItemComponent', () => {
  let store: SpectatorService<Store>;
  const createStore: SpectatorServiceFactory<Store> =
    createServiceFactory<Store>(Store);

  let app: SpectatorService<AppService>;
  const createApp: SpectatorServiceFactory<AppService> =
    createServiceFactory<AppService>(AppService);

  let spectator: Spectator<MenuItemComponent>;
  let element: HTMLElement;

  const createComponent = createComponentFactory<MenuItemComponent>({
    component: MenuItemComponent,
    imports: [
      MenuItemComponentModule,
      RouterTestingModule,
      NgxsModule.forRoot([StateApp]),
      TranslateModule.forRoot(),
      NoopAnimationsModule,
    ],
    declareComponent: false,
  });

  beforeEach(waitForAsync(() => {
    store = createStore();
    app = createApp();

    store.service.reset({ [StateApp.name]: StateAppOptions.defaults });
    store.service.dispatch(new ActionAppLoad(AppList));

    spectator = createComponent();
    spectator.component.app = AppService.toArray(
      app.service.generateLookup(AppList)
    )[0];
    spectator.fixture.detectChanges();

    element = spectator.debugElement.query(By.css('.cpt-link')).nativeElement;
  }));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render menu item', () => {
    const properties: AppProperties = spectator.component.app;
    const avatar: HTMLImageElement = spectator.debugElement.query(
      By.css('.cpt-avatar')
    ).nativeElement;
    const header: HTMLElement = spectator.debugElement.query(
      By.css('.cpt-header')
    ).nativeElement;
    const description: HTMLElement = spectator.debugElement.query(
      By.css('.cpt-description')
    ).nativeElement;

    expect(avatar.alt).toBe(properties.display);
    expect(avatar.src.includes(properties.icon || 'EMPTY')).toBe(true);
    expect(header.textContent?.trim()).toBe(properties.display);
    expect(description.textContent?.trim()).toBe(properties.description);
  });
});
