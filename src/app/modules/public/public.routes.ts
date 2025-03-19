import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { RegisterPageComponent } from "./pages/registerPage/registerPage.component";
import { LoginPageComponent } from "./pages/loginPage/loginPage.component";
import { importProvidersFrom } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { PublicReducers } from "./store/public.reducers";
import { RegisterReducer } from "./store/reducers/register.reducer";


export const public_routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      title: 'Lui explica | Lexia',
    },
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    data: {
      title: 'Lui explica | Registro',
    },


  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Lui explica | Iniciar sesión',
    }
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',

  },
]
