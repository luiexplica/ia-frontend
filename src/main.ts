import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeRipple } from '../polyfills';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if (typeof (window as any).ripple !== 'undefined') {
      (window as any).ripple.initialize();
    } else {
      console.warn('ripple.js no está disponible.');
    }
  })
  .catch((err) => console.error(err));