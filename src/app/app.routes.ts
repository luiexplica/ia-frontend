import { Routes } from '@angular/router';
import PublicComponent from './modules/public/public.component';
import { public_routes } from './modules/public/public.routes';
import { ExperimentalsComponent } from './modules/experimentals/experimentals.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RegisterReducer } from './modules/public/store/reducers/register.reducer';
import { PublicReducers } from './modules/public/store/public.reducers';
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
    path: 'experimentals',
    component: ExperimentalsComponent
  },
  {
    path: '',
    component: PublicComponent,
    // loadComponent: () =>
    //   import(
    //     './modules/public/public.component'
    //   ),
    providers: [
      importProvidersFrom(
        StoreModule.forFeature('public', PublicReducers)
      ),
    ],
    children: public_routes

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

];
