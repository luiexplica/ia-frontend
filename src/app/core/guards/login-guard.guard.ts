import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { CoreState_I } from '../store/app.reducers';


@Injectable({
  providedIn: 'root'
})
export class LoginVerifyGuard {

  readonly store = inject(Store)
  readonly sessionState = this.store.selectSignal((state: CoreState_I) => state.core.session);
  router = inject(Router)

  constructor(
  ) {

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const {
      status,
      session: {
        token
      },
      sessionChecked
    } = this.sessionState();

    if (
      !(status === 'authenticated') ||
      !sessionChecked ||
      !token
    ) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const {
      status,
      session: {
        token
      },
      sessionChecked
    } = this.sessionState();

    if (
      !(status === 'authenticated') ||
      !sessionChecked ||
      !token
    ) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }

  async canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const {
      status,
      session: {
        token
      },
      sessionChecked
    } = this.sessionState();
    if (
      !(status === 'authenticated') ||
      !sessionChecked ||
      !token
    ) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }

}


