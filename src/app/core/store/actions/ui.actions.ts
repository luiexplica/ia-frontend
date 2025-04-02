import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const uiActions = createActionGroup({
  source: 'UI',
  events: {
    'onLoading': props<{
      onLoading: boolean;
    }>(),
    'onToggleSidebar': emptyProps(),
    'onSetSidebar': props<{
      status: boolean
    }>(),
    'onCloseDrawers': emptyProps(),

  }

});