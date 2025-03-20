import { inject, Injectable, OnDestroy } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { CoreState_I } from "../store/app.reducers";
import { filter, map, Observable, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class noLoginVerifyGuard implements OnDestroy {

  private ngUnsubscribe = new Subject()
  readonly store: Store<CoreState_I> = inject(Store<CoreState_I>)
  router = inject(Router)


  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('core', 'session').pipe(
      takeUntil(this.ngUnsubscribe),
      filter((sessionState) => sessionState.sessionChecked),
      map((sessionState) => {
        const {
          status,
          session: {
            token
          }
        } = sessionState;

        if (
          !(status === 'authenticated') &&
          !token
        ) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;

      })
    )

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('core', 'session').pipe(
      takeUntil(this.ngUnsubscribe),
      filter((sessionState) => sessionState.sessionChecked),
      map((sessionState) => {
        const {
          status,
          session: {
            token
          }
        } = sessionState;

        if (
          !(status === 'authenticated') &&
          !token
        ) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;

      })
    )

  }

  canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('core', 'session').pipe(
      takeUntil(this.ngUnsubscribe),
      filter((sessionState) => sessionState.sessionChecked),
      map((sessionState) => {
        const {
          status,
          session: {
            token
          }
        } = sessionState;

        if (
          !(status === 'authenticated') &&
          !token
        ) {
          return true;
        }
        this.router.navigate(['/home']);
        return false;

      })
    )

  }


}