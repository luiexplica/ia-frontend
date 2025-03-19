import { createReducer, on } from "@ngrx/store"
import { uiActions } from "../actions/ui.actions"

export interface UiState_I {
  isLoading: boolean,
}

const initialState: UiState_I = {
  isLoading: false,
}

export const UiReducer = createReducer(initialState,

  on(uiActions.isLoading, (state, props) => {

    return {
      ...state,
      isLoading: props.isLoading
    }

  }),

)