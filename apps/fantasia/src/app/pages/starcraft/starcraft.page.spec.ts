import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StarcraftPageComponentModule, StarcraftPageComponent } from '@fantasia/app';

describe('PageStarcraft', () => {
  let spectator: Spectator<StarcraftPageComponent>;

  const createComponent = createComponentFactory({
    component: StarcraftPageComponent,
    imports: [RouterTestingModule, StarcraftPageComponentModule],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
