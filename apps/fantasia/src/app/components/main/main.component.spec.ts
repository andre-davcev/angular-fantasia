import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';

import { StateApp, ModuleComponentMain, ComponentMain } from '@fantasia/app';

describe('ComponentMain', () => {
  let spectator: Spectator<ComponentMain>;

  const createComponent = createComponentFactory({
    component: ComponentMain,
    imports: [
      RouterTestingModule,
      ModuleComponentMain,
      NgxsModule.forRoot([StateApp]),
      TranslateModule.forRoot(),
      NoopAnimationsModule
    ],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
