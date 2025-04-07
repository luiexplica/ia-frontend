
import { createReducer, on } from "@ngrx/store"
import { applicationActions } from "../actions/application.actions"

export interface ApplicationState_I {
  isLoading: boolean,
  sidebarCollapsed: boolean;

}

const initialState: ApplicationState_I  = {
  isLoading: false,
  sidebarCollapsed: false

}

export const ApplicationReducer = createReducer(initialState,

  on(applicationActions.isLoading, (state, props) => {
    return {
      ...state,
      isLoading: props.isLoading

    }

  }),

)