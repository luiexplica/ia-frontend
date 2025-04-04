
import { inject, Injectable, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutGlobalService } from './layoutGlobal.service';
import { uiService } from './ui.service';


@Injectable({
  providedIn: 'root'
})
export class RouterUtilsService {

  router = inject(Router);

  private layoutGlobalService = inject(LayoutGlobalService)
  private uiService = inject(uiService)
  private routerEventsSubscription: Subscription = new Subscription();

  currentRoute = signal<string>('');

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started to:', event.url);
        this.layoutGlobalService.setLayoutDefault();
        this.uiService.sidebarsClose();

      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended at:', event.url);
        this.currentRoute.set(event.url);

      }
      if (event instanceof NavigationCancel) {
        console.log('Navigation canceled:', event.url);

      }
      if (event instanceof NavigationError) {
        console.log('Navigation error:', event.url);

      }

    });

  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();

  }

}
