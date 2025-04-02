import { CoreState_I } from '../app.reducers';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { uiActions } from '../actions/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class UiStoreService {

  store = inject(Store);
  state = this.store.selectSignal((state: CoreState_I) => state.core.ui);

  onLoading(onLoading: boolean) {
    this.store.dispatch(uiActions.onLoading({
      onLoading
    }));

  }

  onToggleSidebar() {
    this.store.dispatch(uiActions.onToggleSidebar());

  }

  onSetSidebar(status: boolean) {
    this.store.dispatch(uiActions.onSetSidebar({
      status
    }));

  }

  onCloseDrawers() {
    this.store.dispatch(uiActions.onCloseDrawers());

  }

}
