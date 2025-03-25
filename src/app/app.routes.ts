import PublicComponent from './modules/public/public.component';
import { public_routes } from './modules/public/public.routes';
import { ExperimentalsComponent } from './modules/experimentals/experimentals.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PublicReducers } from './modules/public/store/public.reducers';
import { noLoginVerifyGuard } from '@guards/no-login-verify.guard';
import { LoginVerifyGuard } from './core/guards/login-guard.guard';
import { MainComponent } from './modules/main/main.component';
import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'experimentals',
    component: ExperimentalsComponent
  },
  {
    path: 'main',
    component: MainComponent,
    // loadComponent: () =>
    //   import(
    //     './modules/public/public.component'
    //   ),
    providers: [
      // importProvidersFrom(
      //   StoreModule.forFeature('public', PublicReducers)
      // ),
    ],
    children: public_routes,
    canActivate: [LoginVerifyGuard],
    canActivateChild: [LoginVerifyGuard],
    canLoad: [LoginVerifyGuard]

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
    children: public_routes,
        canActivate: [noLoginVerifyGuard],
        canActivateChild: [noLoginVerifyGuard],
        canLoad: [noLoginVerifyGuard]

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

];
