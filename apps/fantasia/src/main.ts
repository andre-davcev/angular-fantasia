import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponentModule } from '../../fantasia/src/app/app.module';
import { environment } from '../../fantasia/src/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppComponentModule)
  .catch((err) => console.error(err));
