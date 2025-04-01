import { Routes } from "@angular/router";
import { PanelComponent } from "./pages/panel/panel.component";
import { application_panel_routes } from "./pages/panel/panel.routes";

export const application_routes: Routes = [
  {
    path: 'settings',
    component: PanelComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      // title: 'Lui explica | Lexia',
    },
    children: application_panel_routes,
  },
  {
    path: '**',
    redirectTo: 'settings',
    pathMatch: 'full',

  },
]
