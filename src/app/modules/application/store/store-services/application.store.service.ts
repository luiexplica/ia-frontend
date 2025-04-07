import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationStore_I } from '../application.reducers';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStoreService {

  store = inject(Store);
  state = this.store.selectSignal((state: ApplicationStore_I) => state.application);

}
