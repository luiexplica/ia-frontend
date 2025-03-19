import { ActionReducer, ActionReducerMap, combineReducers } from "@ngrx/store";
import { UiReducer, UiState_I } from "./reducers/ui.reducer";

export interface CoreState_I {
  core: {
    ui: UiState_I;
  };
}

const coreReducer: ActionReducer<CoreState_I['core']> = combineReducers({
  ui: UiReducer,
});

export const appReducers: ActionReducerMap<CoreState_I> = {
  core: coreReducer,
};