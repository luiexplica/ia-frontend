import { createReducer, on } from "@ngrx/store"
import { SessionActions } from "../actions/session.actions"
import { Session_Auth_I, Session_Client_I } from "@luiexplica/ia-dev-services"

type Status_Session_Type = "checking" | "authenticated" | "not-authenticated";

export interface SessionState_I {
  onLoading: boolean;
  session: Session_Auth_I;
  client: Session_Client_I;
  status: Status_Session_Type;
  sessionChecked: boolean;

}

const initialState: SessionState_I = {
  onLoading: false,
  session: {} as Session_Auth_I,
  client: {} as Session_Client_I,
  status: 'not-authenticated',
  sessionChecked: false

}

export const SessionReducer = createReducer(initialState,

  on(SessionActions.onDefault, (state) => {
    return {
      ...initialState
    }

  }),
  on(SessionActions.onLoading, (state, props) => {
    return {
      ...state,
      onLoading: props.onLoading

    }

  }),
  on(SessionActions.onLogin, (state, props) => {
    const status: Status_Session_Type = 'authenticated';
    return {
      ...state,
      session: props.session,
      client: props.client,
      onLoading: false,
      sessionChecked: true,
      status

    }

  }),
  on(SessionActions.onLogout, (state) => {
    const status: Status_Session_Type = 'not-authenticated';
    return {
      ...state,
      session: {} as Session_Auth_I,
      client: {} as Session_Client_I,
      sessionChecked: true,
      onLoading: false,
      status

    }

  }),
  on(SessionActions.onChecking, (state) => {
    const status: Status_Session_Type = 'checking';
    return {
      ...state,
      onLoading: true,
      sessionChecked: false,
      status

    }

  })

)