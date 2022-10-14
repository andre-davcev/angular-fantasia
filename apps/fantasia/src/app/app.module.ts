import { DoBootstrap, NgModule } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StateApp } from '@fantasia/app/state';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponentModule } from './components';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        MenuComponentModule,
        RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }),
        NgxsRouterPluginModule.forRoot(),
        NgxsModule.forRoot([StateApp]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [AppComponent],
    exports: [AppComponent]
})
export class AppComponentModule implements DoBootstrap {
  constructor(private applicationRef: ApplicationRef) {}

  public ngDoBootstrap(): void {
    this.applicationRef.bootstrap(AppComponent);
  }
}
