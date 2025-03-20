import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { RegisterPageComponent } from "./pages/registerPage/registerPage.component";
import { LoginPageComponent } from "./pages/loginPage/loginPage.component";
import { noLoginVerifyGuard } from "@guards/no-login-verify.guard";


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
    canActivate: [noLoginVerifyGuard],
    canActivateChild: [noLoginVerifyGuard],
    canLoad: [noLoginVerifyGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Lui explica | Iniciar sesión',
    },
    canActivate: [noLoginVerifyGuard],
    canActivateChild: [noLoginVerifyGuard],
    canLoad: [noLoginVerifyGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',

  },
]
