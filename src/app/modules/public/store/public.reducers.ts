import { ActionReducer, ActionReducerMap, combineReducers } from "@ngrx/store";
import { RegisterReducer, RegisterState_I } from "./reducers/register.reducer";


export interface PublicState_I {
  public: {
    register: RegisterState_I;
  }
}

export const PublicReducers: ActionReducerMap<any> = {
  register: RegisterReducer,
};