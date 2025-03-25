import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { UiStoreService } from '@core/store/services/ui.store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    DrawerModule
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  uiStore = inject(UiStoreService);
  visible = computed(() => this.uiStore.state().drawer);

  router = inject(Router);

  onHide() {
    this.uiStore.onToggleDrawer();

  }

    goTo(route: string) {
    this.router.navigate([route]);

  }


}
