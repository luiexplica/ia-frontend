import { Icon_I } from '@interfaces/globals.interface';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { UiStoreService } from '@core/store/services/ui.store.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    ButtonComponent,
    DrawerModule
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  uiStore = inject(UiStoreService);
  visible = computed(() => this.uiStore.state().drawer);

  router = inject(Router);

  iconButtonClose = signal<Icon_I>({
    type: 'html',
    value: "<i class='bx bx-x'></i>"
  })

  onHide() {
    this.uiStore.onToggleDrawer();

  }

  close(){
    this.uiStore.onToggleDrawer();

  }

}
