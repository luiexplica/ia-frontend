import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState_I } from '../app.reducers';
import { Session_Auth_I } from '@luiexplica/ia-dev-services';
import { SessionActions } from '../actions/session.actions';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  store = inject(Store);
  state = this.store.selectSignal((state: CoreState_I) => state.core.session);

  onChecking() {
    this.store.dispatch(SessionActions.onChecking());

  }

  onLogin(session: Session_Auth_I) {
    this.store.dispatch(SessionActions.onLogin({
      session
    }));

  }

  onLogout() {
    this.store.dispatch(SessionActions.onLogout());

  }

  isLoading(isLoading: boolean) {
    this.store.dispatch(SessionActions.isLoading({
      isLoading
    }));

  }
  onDefault() {
    this.store.dispatch(SessionActions.onDefault());

  }

}
