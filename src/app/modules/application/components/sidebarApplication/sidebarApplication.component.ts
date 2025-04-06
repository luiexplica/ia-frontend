import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal, untracked } from '@angular/core';
import { SidebarComponent } from '@components/shared/sidebar/sidebar.component';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { UiStoreService } from '@core/store/store-services/ui.store.service';
import { MenuItem_I } from '@interfaces/menus.interface';
import { NestedMenuComponent } from '@components/menus/nestedMenu/nestedMenu.component';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { RouterUtilsService } from '@core/services/routerUtils.service';

@Component({
  selector: 'app-sidebar-application',
  imports: [
    NgTemplateOutlet,
    NestedMenuComponent,
    SidebarComponent,
  ],
  templateUrl: './sidebarApplication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarApplicationComponent {

  application_routes = signal<MenuItem_I[]>([
    {
      id: 'chat-ia',
      title: 'Chat I.A',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-message-square-dots' ></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

    },
    {
      id: 'lexia-agent',
      title: 'Agente Lexia',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-bot'  ></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

    },
    {
      id: 'ats-generator',
      title: 'Generador de ATS',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-spreadsheet'></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

    },

  ]);

  options = signal<MenuItem_I[]>([
    {
      title: 'Perfil de usuario',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-user' ></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },
      id: 'app/settings/profile',

    },
    {
      title: 'Configuraciones',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bxs-cog' ></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },
      id: 'app/settings/configurations',

    },
    {
      title: 'Notificaciones',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-bell'></i>"
      },
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },
      id: 'app/settings/notifications',

    },
    {
      title: 'Cerrar sesión',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-log-out'></i>"
      },
      divider: {
        up: true
      },
      action: () => {
        this.authService.logout();
      },
      id: 'logout',

    },

  ]);

  router = inject(Router);

  uiStore = inject(UiStoreService);

  layoutGlobalService = inject(LayoutGlobalService);
  routerUtilsService = inject(RouterUtilsService);

  authService = inject(AuthService);

  componentEffect = effect(() => {
    if (this.layoutGlobalService.checkSize('pcTab')) {
      this.uiStore.onSetSidebar(false);

    }
    this.routerUtilsService.currentRoute();
    untracked(() => {
      this.setActiveRoute();

    });

  });


  setActiveRoute() {
    const currentRoute = this.routerUtilsService.currentRoute();
    if (currentRoute) {
      this.application_routes.set(this.application_routes().map(item => ({
        ...item,
        active: this.router.url.includes(item.id)
      })));
      this.options.set(this.options().map(item => ({
        ...item,
        active: this.router.url.includes(item.id)
      })));

    }

  }

  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {

  }

  goTo(route: string) {
    this.router.navigate([route]);

  }

}
