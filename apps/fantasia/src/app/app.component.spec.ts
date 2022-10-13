import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppModule } from './app.module';
import { ComponentApp } from './app.component';

describe('ComponentApp', () => {
  let spectator: Spectator<ComponentApp>;

  const createComponent = createComponentFactory({
    component: ComponentApp,
    imports: [RouterTestingModule, AppModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
