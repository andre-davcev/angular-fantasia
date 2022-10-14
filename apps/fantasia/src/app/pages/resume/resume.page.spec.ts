import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ResumePageComponentModule, ResumePageComponent } from '@fantasia/app';

describe('ResumePageComponent', () => {
  let spectator: Spectator<ResumePageComponent>;

  const createComponent = createComponentFactory({
    component: ResumePageComponent,
    imports: [RouterTestingModule, ResumePageComponentModule],
    declareComponent: false
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
