import { createActionGroup, props } from "@ngrx/store";


export const uiActions = createActionGroup({
  source: 'UI',
  events: {
    'isLoading': props<{
      isLoading: boolean;
    }>(),

  }

});