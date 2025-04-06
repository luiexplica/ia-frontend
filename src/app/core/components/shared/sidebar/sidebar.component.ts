import { Icon_I } from '@interfaces/globals.interface';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { UiStoreService } from '@app/core/store/store-services/ui.store.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '@app/core/components/buttons/button/button.component';
import { NgClass } from '@angular/common';
import { TextButtonComponent } from '@components/buttons/textButton/textButton.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    ButtonComponent,
    TextButtonComponent,
    NgClass,
    DrawerModule
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  router = inject(Router);

  headerLogo = input<boolean>(false);
  fullSpace = input<boolean>(false);

  uiStore = inject(UiStoreService);
  visible = computed(() => this.uiStore.state().sidebar);

  iconButtonClose = signal<Icon_I>({
    type: 'html',
    value: "<i class='bx bx-x'></i>"
  })

  onHide() {
    this.uiStore.onToggleSidebar();

  }

  close(){
    this.uiStore.onToggleSidebar();

  }

}
