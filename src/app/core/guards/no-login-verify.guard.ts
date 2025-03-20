import { inject, Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { CoreState_I } from "../store/app.reducers";


@Injectable({
  providedIn: 'root'
})
export class noLoginVerifyGuard {

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

    console.log('estado',  this.sessionState());

    if (
      !(status === 'authenticated') &&
      !token
    ) {
      return true;
    }

    this.router.navigate(['/home']);
    console.log('fuera de aqui');
    return false;

  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const {
      status,
      session: {
        token
      },
      sessionChecked
    } = this.sessionState();

    console.log('estado',  this.sessionState());

    if (
      !(status === 'authenticated') &&
      !token
    ) {
      return true;
    }

    this.router.navigate(['/home']);
    console.log('fuera de aqui');
    return false;

  }

  async canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const {
      status,
      session: {
        token
      },
      sessionChecked
    } = this.sessionState();

    console.log('estado',  this.sessionState());

    if (
      !(status === 'authenticated') &&
      !token
    ) {
      return true;
    }

    this.router.navigate(['/home']);
    console.log('fuera de aqui');
    return false;

  }


}