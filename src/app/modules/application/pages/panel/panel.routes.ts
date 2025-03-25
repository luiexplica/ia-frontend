
import { Routes } from "@angular/router";
import { AccountComponent } from "./pages/account/account.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";

export const application_panel_routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      // title: 'Lui explica | Lexia',
    },

  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      // title: 'Lui explica | Lexia',
    },

  },
  {
    path: '**',
    redirectTo: 'account',
    pathMatch: 'full',

  },

]
