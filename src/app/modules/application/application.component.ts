import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { RouterUtilsService } from '@core/services/routerUtils.service';
import { NavBarApplicationComponent } from './components/navBarApplication/navBarApplication.component';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem_I } from '@interfaces/menus.interface';
import { SidebarApplicationComponent } from './components/sidebarApplication/sidebarApplication.component';

@Component({
  selector: 'app-application',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavBarApplicationComponent,
    SidebarApplicationComponent
  ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {

  routerUtilsService = inject(RouterUtilsService);
  layoutGlobalService = inject(LayoutGlobalService);
  fullWidth = computed( () => this.layoutGlobalService.layoutFullScreen() );
  hideNavbar = computed( () => this.layoutGlobalService.hideNavbar() );
  hideFooter = computed( () => this.layoutGlobalService.hideFooter() );

}
