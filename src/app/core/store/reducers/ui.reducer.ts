import { createReducer, on } from "@ngrx/store"
import { uiActions } from "../actions/ui.actions"

export interface UiState_I {
  onLoading: boolean;
  drawer: boolean;
}

const initialState: UiState_I = {
  onLoading: false,
  drawer: false
}

export const UiReducer = createReducer(initialState,

  on(uiActions.onLoading, (state, props) => {

    return {
      ...state,
      onLoading: props.onLoading
    }

  }),
  on(uiActions.onToggleDrawer, (state, props) => {

    return {
      ...state,
      drawer: !state.drawer
    }

  }),

)