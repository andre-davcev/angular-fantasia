import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import {
  MemoriesPageComponentModule,
  MemoriesPageComponent,
} from '@fantasia/app';

describe('MemoriesPageComponent', () => {
  let spectator: Spectator<MemoriesPageComponent>;

  const createComponent = createComponentFactory({
    component: MemoriesPageComponent,
    imports: [RouterTestingModule, MemoriesPageComponentModule],
    declareComponent: false,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
