import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { SidebarComponent } from '@components/shared/sidebar/sidebar.component';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { UiStoreService } from '@core/store/store-services/ui.store.service';

@Component({
  selector: 'app-sidebar-application',
  imports: [
    NgTemplateOutlet,
    SidebarComponent
  ],
  templateUrl: './sidebarApplication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarApplicationComponent {

  uiStore = inject(UiStoreService);

  layoutGlobalService = inject(LayoutGlobalService);

  componentEffect = effect(() => {

    if(this.layoutGlobalService.checkSize('pcTab')) {
      this.uiStore.onSetSidebar(false);

    }

  });

}
