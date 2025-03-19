import { createActionGroup, props } from "@ngrx/store";




export const registerActions = createActionGroup({
  source: `register`,
  events: {
    'isLoading': props <{
      isLoading: boolean;
    }>(),

  }

});