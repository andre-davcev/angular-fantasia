import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { LogoComponent, LogoComponentModule } from '@fantasia/app';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LogoComponent', () => {
  let spectator: Spectator<LogoComponent>;

  const createComponent = createComponentFactory({
    component: LogoComponent,
    imports: [LogoComponentModule, NoopAnimationsModule],
    declareComponent: false,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
