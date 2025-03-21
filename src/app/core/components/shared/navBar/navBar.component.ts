import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { MenuItem_I } from '@interfaces/menus.interface';
import { JsonPipe, NgClass } from '@angular/common';
import { MenuListComponent } from '@components/menus/menuList/menuList.component';
import { SessionStoreService } from '@core/store/services/session.store.service';

@Component({
  selector: 'nav-bar',
  imports: [
    ButtonComponent,
    MenuListComponent,
    NgClass,
    JsonPipe
  ],
  templateUrl: './navBar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent  {

  menuItems = input.required<MenuItem_I[]>();
  router = inject(Router);

  sessionStore = inject(SessionStoreService);
  sessionState = computed(() => this.sessionStore.state());

  collapseMenu = signal(false);

  goTo(route: string) {
    this.router.navigate([route]);

  }

  toggleCollapseMenu() {
    this.collapseMenu.set(!this.collapseMenu());

  }

}
