import { createReducer, on } from "@ngrx/store"
import { uiActions } from "../actions/ui.actions"

export interface UiState_I {
  onLoading: boolean;
  sidebar: boolean;
}

const initialState: UiState_I = {
  onLoading: false,
  sidebar: false
}

export const UiReducer = createReducer(initialState,

  on(uiActions.onLoading, (state, props) => {
    return {
      ...state,
      onLoading: props.onLoading
    }

  }),
  on(uiActions.onSetSidebar, (state, props) => {
    return {
      ...state,
      sidebar: props.status
    }

  }),
  on(uiActions.onToggleSidebar, (state, props) => {
    return {
      ...state,
      sidebar: !state.sidebar
    }

  }),
  on(uiActions.onCloseDrawers, (state, props) => {
    return {
      ...state,
      sidebar: false
    }

  }),

)