import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ModulePageResume, PageResume } from '@fantasia/app';

describe('PageResume', () => {
  let spectator: Spectator<PageResume>;

  const createComponent = createComponentFactory({
    component: PageResume,
    imports: [RouterTestingModule, ModulePageResume],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
