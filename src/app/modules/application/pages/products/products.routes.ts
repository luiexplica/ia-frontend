import { Routes } from "@angular/router";
import { AtsGeneratorComponent } from "./pages/ats-generator/ats-generator.component";
import { ChatIaComponent } from "./pages/chat-ia/chat-ia.component";
import { LexiaAgentComponent } from "./pages/lexia-agent/lexia-agent.component";



export const application_products_routes: Routes = [
  {
    path: 'chat-ia',
    component: ChatIaComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      title: 'Lui explica | Chat IA',
    },

  },
  {
    path: 'lexia-agent',
    component: LexiaAgentComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      title: 'Lui explica | Agente Lexia',
    },

  },
  {
    path: 'ats-generator',
    component: AtsGeneratorComponent,
    data: {
      // icon: 'fa-solid fa-spell-check',
      title: 'Lui explica | Generador ATS',
    },

  },
  {
    path: '**',
    redirectTo: 'profile',
    pathMatch: 'full',

  },

]
