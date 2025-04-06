import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';
import { Icon_I } from '@interfaces/globals.interface';
import { AuthService } from '@services/auth.service';
import { DropDownPopoverComponent } from '@components/menus/dropDownPopover/dropDownPopover.component';
import { SessionStoreService } from '@core/store/store-services/session.store.service';
import { RouterUtilsService } from '@core/services/routerUtils.service';
import { Router } from '@angular/router';
import { TextButtonComponent } from '@components/buttons/textButton/textButton.component';

@Component({
  selector: 'app-user-dialog',
  imports: [
    TextButtonComponent,
    DropDownPopoverComponent
  ],
  templateUrl: './userDialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {

  iconButton = signal<Icon_I>({
    type: 'html',
    value: `
      <div class="relative inline-flex">
    <img
      src="https://docs.material-tailwind.com/img/face-2.jpg"
      alt="avatar"
      class="inline-block relative object-cover object-center rounded-full w-6 h-6"
    /><span
      class="absolute min-w-[10px] min-h-[10px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[14%] right-[14%] translate-x-2/4 -translate-y-2/4 bg-green-500 text-white border border-white"
    ></span>
  </div>
    `
  });

  options = signal<MenuItem_I[]>([
    {
      title: 'Perfil de usuario',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-user' ></i>"
      },
      id: 'app/settings/profile',
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

    },
    {
      title: 'Configuraciones',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bxs-cog' ></i>"
      },
      id: 'app/settings/configurations',
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

    },
    {
      title: 'Notificaciones',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-bell'></i>"
      },
      id: 'app/settings/notifications',
      action: (item: MenuItem_I) => {
        this.goTo(item.id);
      },

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
      id: 'logout',
      action: () => {
        this.authService.logout();
      },

    },

  ]);

  router = inject(Router);

  authService = inject(AuthService);
  routerUtilsService = inject(RouterUtilsService);
  sessionStore = inject(SessionStoreService);


  name = computed(() => {
    const name = this.sessionStore.state().client.name;
    const lastName = this.sessionStore.state().client.last_name || '';
    return `${name} ${lastName}`;

  })

  componentEffect = effect(() => {

    this.routerUtilsService.currentRoute();
    untracked(() => {
      this.setActiveRoute();

    })

  });

  goTo(route: string) {
    console.log('route', route);
    this.router.navigate([route]);

  }

  setActiveRoute() {
    const currentRoute = this.routerUtilsService.currentRoute();
    if (currentRoute) {
      this.options.set(this.options().map(item => ({
        ...item,
        active: this.router.url.includes(item.id)
      })));

    }

  }

}
