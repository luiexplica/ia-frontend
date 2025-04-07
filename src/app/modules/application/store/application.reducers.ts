
import { CoreStore_I } from '@core/store/app.reducers';

import { ActionReducerMap } from "@ngrx/store";
import { ApplicationReducer, ApplicationState_I } from "./reducers/application.reducers";


export interface ApplicationModuleState_I {
  global: ApplicationState_I;

}

// const coreReducer: ActionReducer<CoreState_I['core']> = combineReducers({
//   ui: UiReducer,
//   session: SessionReducer
// });

export const ApplicationReducers: ActionReducerMap<ApplicationModuleState_I> = {
  global: ApplicationReducer,
};


export interface ApplicationStore_I extends CoreStore_I {
  application: ApplicationModuleState_I;
}