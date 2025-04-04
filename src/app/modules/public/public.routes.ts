import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/homePage/homePage.component";
import { RegisterPageComponent } from "./pages/registerPage/registerPage.component";
import { LoginPageComponent } from "./pages/loginPage/loginPage.component";
import { noLoginVerifyGuard } from "@guards/no-login-verify.guard";
import { ContactPageComponent } from "./pages/contactPage/contactPage.component";


export const public_routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
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
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Lui explica | Contacto',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',

  },
]
