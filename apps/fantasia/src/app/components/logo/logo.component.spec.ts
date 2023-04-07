import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { Animation, LogoComponent, LogoComponentModule } from '@fantasia/app';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LogoComponent', () => {
  let spectator: Spectator<LogoComponent>;

  const createComponent = createComponentFactory({
    component: LogoComponent,
    imports: [LogoComponentModule, NoopAnimationsModule],
    declareComponent: false,
  });

  beforeEach(() => (spectator = createComponent()));
});
