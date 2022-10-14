import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';

import { StateApp, MainComponentModule, MainComponent } from '@fantasia/app';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;

  const createComponent = createComponentFactory({
    component: MainComponent,
    imports: [
      RouterTestingModule,
      MainComponentModule,
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
