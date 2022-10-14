import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { Animation, LogoComponent, LogoComponentModule } from '@fantasia/app';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LogoComponent', () => {
  let spectator: Spectator<LogoComponent>;

  const createComponent = createComponentFactory({
    component: LogoComponent,
    imports: [LogoComponentModule, NoopAnimationsModule],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.component.animation).toBe(Animation.Default);
  });

  it('should test mouse hover', () => {
    spectator.component.mouseover();
    spectator.fixture.detectChanges();

    expect(spectator.component.animation).toBe(Animation.Hover);
  });

  it('should test mouse leave', () => {
    spectator.component.mouseover();
    spectator.fixture.detectChanges();

    spectator.component.mouseleave();
    spectator.fixture.detectChanges();

    expect(spectator.component.animation).toBe(Animation.Default);
  });
});
