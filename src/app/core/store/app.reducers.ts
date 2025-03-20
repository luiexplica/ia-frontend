import { ActionReducer, ActionReducerMap, combineReducers } from "@ngrx/store";
import { UiReducer, UiState_I } from "./reducers/ui.reducer";
import { SessionReducer, SessionState_I } from "./reducers/session.reducer";

export interface CoreState_I {
  core: {
    ui: UiState_I;
    session: SessionState_I
  };
}

const coreReducer: ActionReducer<CoreState_I['core']> = combineReducers({
  ui: UiReducer,
  session: SessionReducer
});

export const appReducers: ActionReducerMap<CoreState_I> = {
  core: coreReducer,
};