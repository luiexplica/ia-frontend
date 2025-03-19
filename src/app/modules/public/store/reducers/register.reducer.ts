import { createReducer, on } from "@ngrx/store"
import { registerActions } from "../actions/register.actions"

export interface RegisterState_I {
  isLoading: boolean,
}

const initialState: RegisterState_I  = {
  isLoading: false,
}

export const RegisterReducer = createReducer(initialState,

  on(registerActions.isLoading, (state, props) => {

    return {
      ...state,
      isLoading: props.isLoading
    }

  }),

)