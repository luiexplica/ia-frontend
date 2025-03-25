import { Session_Auth_I, Session_Client_I } from "@luiexplica/ia-dev-services";
import { createActionGroup, props, emptyProps } from "@ngrx/store";

export const SessionActions = createActionGroup({
  source: `Session`,
  events: {
    'onLoading': props<{
      onLoading: boolean;
    }>(),
    'onLogin': props<{
      session: Session_Auth_I;
      client: Session_Client_I;
    }>(),
    'onDefault': emptyProps(),
    'onChecking': emptyProps(),
    'onLogout': emptyProps(),

  }

});