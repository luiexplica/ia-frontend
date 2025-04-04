
import { ChangeDetectionStrategy, Component, signal, inject, OnInit, computed, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem_I } from '@interfaces/menus.interface';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { ButtonComponent } from '@components/button/button.component';
import { RouterUtilsService } from '@core/services/routerUtils.service';
import { NavBarPublicComponent } from './components/navBarPublic/navBarPublic.component';
import { NavBarMenuComponent } from '@components/shared/navBarMenu/navBarMenu.component';
import { SidebarComponent } from '@components/shared/sidebar/sidebar.component';

@Component({
  selector: 'public',
  imports: [
    RouterOutlet,
    NavBarMenuComponent,
    ButtonComponent,
    SidebarComponent,
    NavBarPublicComponent,
    FooterComponent
  ],
  providers: [

  ],
  templateUrl: './public.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicComponent implements OnInit {

  public_routes = signal<MenuItem_I[]>([
    {
      id: 'home',
      title: 'Inicio',
      active: false,
      action: (item) => {
        this.goTo(item.id);

      }
    },
    {
      id: 'services',
      title: 'Servicios',
      active: false,
      action: (item) => {
        this.goTo(item.id);

      }
    },
    {
      id: 'contact',
      title: 'Contacto',
      active: false,
      action: (item) => {
        this.goTo(item.id);

      }
    }
  ]);

  router = inject(Router);

  routerUtilsService = inject(RouterUtilsService);
  layoutGlobalService = inject(LayoutGlobalService);
  fullWidth = computed( () => this.layoutGlobalService.layoutFullScreen() );
  hideNavbar = computed( () => this.layoutGlobalService.hideNavbar() );
  hideFooter = computed( () => this.layoutGlobalService.hideFooter() );

  effect = effect( () => {
    const p = this.routerUtilsService.currentRoute();
    this.setActiveRoute();

  })

  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {

  }

  goTo(route: string) {
    this.router.navigate([route]);

  }

  setActiveRoute() {
    this.public_routes.update((routes) => {
      routes.forEach((item) => {
        item.active = false;

        if (this.router.url.includes(item.id)) {
          item.active = true;
        }
      });
      return routes;
    });

  }

  isActive(item: MenuItem_I) {
    return this.router.url.includes(item.id);

  }

}
