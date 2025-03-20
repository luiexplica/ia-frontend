import { createReducer, on } from "@ngrx/store"
import { SessionActions } from "../actions/session.actions"
import { Session_Auth_I } from "@luiexplica/ia-dev-services"

type Status_Session_Type = "checking" | "authenticated" | "not-authenticated";

export interface SessionState_I {
  isLoading: boolean;
  session: Session_Auth_I;
  status: Status_Session_Type;
  sessionChecked: boolean;
}

const initialState: SessionState_I = {
  isLoading: false,
  session: {} as Session_Auth_I,
  status: 'not-authenticated',
  sessionChecked: false
}

export const SessionReducer = createReducer(initialState,

  on(SessionActions.onDefault, (state) => {
    return {
      ...initialState
    }

  }),
  on(SessionActions.isLoading, (state, props) => {
    return {
      ...state,
      isLoading: props.isLoading
    }

  }),
  on(SessionActions.onLogin, (state, props) => {
    const status: Status_Session_Type = 'authenticated';
    return {
      ...state,
      session: props.session,
      isLoading: false,
      sessionChecked: true,
      status

    }

  }),
  on(SessionActions.onLogout, (state) => {
    const status: Status_Session_Type = 'not-authenticated';
    return {
      ...state,
      session: {} as Session_Auth_I,
      sessionChecked: true,
      isLoading: false,
      status
    }

  }),
  on(SessionActions.onChecking, (state) => {
    const status: Status_Session_Type = 'checking';
    return {
      ...state,
      isLoading: true,
      sessionChecked: false,
      status
    }

  })

)