import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Icon_I } from '@interfaces/globals.interface';
import { UiStoreService } from '@core/store/store-services/ui.store.service';
import { UserDialogComponent } from '../userDialog/userDialog.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'nav-bar-application',
  imports: [
    ButtonComponent,
    UserDialogComponent,
  ],
  templateUrl: './navBarApplication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarApplicationComponent {

  router = inject(Router);

  uiStore = inject(UiStoreService);

  collapseIcon: Icon_I = {
    type: 'html',
    value: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
      stroke="currentColor" aria-hidden="true" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
      </path>
    </svg>
    `
  }

  goTo(route: string) {
    this.router.navigate([route]);

  }

  toggleDrawerSidebar() {
    this.uiStore.onToggleSidebar();

  }

}
