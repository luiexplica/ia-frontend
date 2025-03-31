import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState_I } from '../app.reducers';
import { Session_Auth_I, Session_Client_I } from '@luiexplica/ia-dev-services';
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

  onLogin(session: Session_Auth_I, client: Session_Client_I) {
    this.store.dispatch(SessionActions.onLogin({
      session,
      client
    }));

  }

  onLogout() {
    this.store.dispatch(SessionActions.onLogout());

  }

  isLoading(onLoading: boolean) {
    this.store.dispatch(SessionActions.onLoading({
      onLoading
    }));

  }
  onDefault() {
    this.store.dispatch(SessionActions.onDefault());

  }

}
