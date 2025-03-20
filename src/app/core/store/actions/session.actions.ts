import { Session_Auth_I } from "@luiexplica/ia-dev-services";
import { createActionGroup, props, emptyProps } from "@ngrx/store";

export const SessionActions = createActionGroup({
  source: `Session`,
  events: {
    'isLoading': props<{
      isLoading: boolean;
    }>(),
    'onLogin': props<{
      session: Session_Auth_I
    }>(),
    'onDefault': emptyProps(),
    'onChecking': emptyProps(),
    'onLogout': emptyProps(),

  }

});