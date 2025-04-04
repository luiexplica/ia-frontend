import { Routes } from "@angular/router";
import { PanelComponent } from "./pages/panel/panel.component";
import { application_panel_routes } from "./pages/panel/panel.routes";
import { ProductsComponent } from "./pages/products/products.component";
import { application_products_routes } from "./pages/products/products.routes";

export const application_routes: Routes = [
  {
    path: 'settings',
    component: PanelComponent,
    data: {
      title: 'Lui explica | Configuraciones',
    },
    children: application_panel_routes,

  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
    },
    children: application_products_routes,

  },
  {
    path: '**',
    redirectTo: 'settings',
    pathMatch: 'full',

  },
]
