import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';
import { ButtonComponent } from '@components/button/button.component';
import { Icon_I } from '@interfaces/globals.interface';
import { AuthService } from '@services/auth.service';
import { DropDownPopoverComponent } from '@components/menus/dropDownPopover/dropDownPopover.component';
import { SessionStoreService } from '@core/store/store-services/session.store.service';

@Component({
  selector: 'app-user-dialog',
  imports: [
    ButtonComponent,
    DropDownPopoverComponent
  ],
  templateUrl: './userDialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {

  options = signal<MenuItem_I[]>([
    {
      title: 'Configuraciones',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bxs-cog' ></i>"
      },
      action: (index: number) => {
        this.listenAction(this.options()[index]);

      },
      id: 'config',
      divider: {
        bottom: true
      }
    },
    {
      title: 'Cerrar sesión',
      active: false,
      icon: {
        type: 'html',
        value: "<i class='bx bx-log-out'></i>"
      },
      action: (index: number) => {
        this.listenAction(this.options()[index]);

      },
      id: 'logout',
    },

  ]);

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

  authService = inject(AuthService);
  sessionStore = inject(SessionStoreService);

  name = computed(() => {
    const name = this.sessionStore.state().client.name;
    const lastName = this.sessionStore.state().client.last_name || '';
    return `${name} ${lastName}`;

  })

  listenAction(event: MenuItem_I) {
    if (event.id === 'logout') {
      this.authService.logout();

    }

  }

}
