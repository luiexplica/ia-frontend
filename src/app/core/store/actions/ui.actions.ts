import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const uiActions = createActionGroup({
  source: 'UI',
  events: {
    'onLoading': props<{
      onLoading: boolean;
    }>(),
    'onToggleDrawer': emptyProps(),
    'onCloseDrawers': emptyProps(),

  }

});