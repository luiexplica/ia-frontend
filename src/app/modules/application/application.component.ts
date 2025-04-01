import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { RouterUtilsService } from '@core/services/routerUtils.service';
import { NavBarApplicationComponent } from './components/navBarApplication/navBarApplication.component';
import { Router } from '@angular/router';
import { MenuItem_I } from '@interfaces/menus.interface';

@Component({
  selector: 'app-application',
  imports: [
    FooterComponent,
    NavBarApplicationComponent
  ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {

  application_routes = signal<MenuItem_I[]>([
    {
      id: 'home',
      title: 'Inicio',
      active: false,
      action: (index: number) => this.listenClick(index)
    },
    {
      id: 'services',
      title: 'Servicios',
      active: false,
      action: (index: number) => this.listenClick(index)
    },
    {
      id: 'contact',
      title: 'Contacto',
      active: false,
      action: (index: number) => this.listenClick(index)
    }
  ]);


  router = inject(Router);

  routerUtilsService = inject(RouterUtilsService);
  layoutGlobalService = inject(LayoutGlobalService);
  fullWidth = computed( () => this.layoutGlobalService.layoutFullScreen() );
  hideNavbar = computed( () => this.layoutGlobalService.hideNavbar() );
  hideFooter = computed( () => this.layoutGlobalService.hideFooter() );

   ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setActiveRoute();

  }

  goTo(route: string) {
    this.router.navigate([route]);

  }

  setActiveRoute() {
    this.application_routes.update((routes) => {
      routes.forEach((item) => {
        item.active = false;

        if (this.router.url.includes(item.id)) {
          item.active = true;
        }
      });
      return routes;
    });

  }

  listenClick(index: number) {
    const item = this.application_routes()[index];
    this.router.navigate([item.id]);

    this.application_routes.update((routes) => {
      routes.forEach((item) => {
        item.active = false;
      });
      return routes;
    });

  }

}
