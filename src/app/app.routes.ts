import { Routes } from '@angular/router';
import PublicComponent from './modules/public/public.component';
import { public_routes } from './modules/public/public.routes';
// import { PublicComponent } from './modules/public/public.component';

export const routes: Routes = [

  // {
  //     path: '',
  //     component: PublicComponent,
  //     children: [
  //         {
  //             path: 'home',
  //             loadComponent: () =>
  //                 import(
  //                     './modules/public/public.component'
  //                 ),
  //             data: {
  //                 icon: 'fa-solid fa-spell-check',
  //                 title: 'Ortografía',
  //                 description: 'Corregir ortografía',
  //             },
  //         },

  //     ]

  // }
  {
    path: '',
    component: PublicComponent,
    // loadComponent: () =>
    //   import(
    //     './modules/public/public.component'
    //   ),
    children: public_routes

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

];
