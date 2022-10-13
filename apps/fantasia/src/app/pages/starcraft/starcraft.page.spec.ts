import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ModulePageStarcraft, PageStarcraft } from '@fantasia/app';

describe('PageStarcraft', () => {
  let spectator: Spectator<PageStarcraft>;

  const createComponent = createComponentFactory({
    component: PageStarcraft,
    imports: [RouterTestingModule, ModulePageStarcraft],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
