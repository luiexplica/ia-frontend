
import { createActionGroup, props } from "@ngrx/store";

export const applicationActions = createActionGroup({
  source: `application`,
  events: {
    'isLoading': props<{
      isLoading: boolean;
    }>(),
    'toggleSidebar': props<{
      status: boolean;
    }>()

  }

});