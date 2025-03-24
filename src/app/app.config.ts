import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './core/store/app.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { primeNgPreset } from '@core/primeng/preset'
import theme from "@primeng/themes/aura/base";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      // withFetch(),
    ),

      provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: primeNgPreset,
                // preset: theme
                options: {
            darkModeSelector: '.my-app-dark'
        }
            }
        }),

    importProvidersFrom(StoreModule.forRoot(appReducers)),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
  ]
};
