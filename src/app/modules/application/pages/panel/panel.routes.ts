
import { Routes } from "@angular/router";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ConfigurationsComponent } from "./pages/configurations/configurations.component";

export const application_panel_routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      // title: 'Lui explica | Lexia',
    },

  },
  {
    path: 'configurations',
    component: ConfigurationsComponent,
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
    redirectTo: 'profile',
    pathMatch: 'full',

  },

]
