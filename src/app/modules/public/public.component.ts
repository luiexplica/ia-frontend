
import { ChangeDetectionStrategy, Component, signal, inject, OnInit, computed } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem_I } from '@interfaces/menus.interface';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';
import { NavBarComponent } from '@components/shared/navBar/navBar.component';
import { FooterComponent } from '@components/shared/footer/footer.component';

@Component({
  selector: 'public',
  imports: [
    RouterOutlet,
    NavBarComponent,
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

  listenClick(index: number) {
    const item = this.public_routes()[index];
    this.router.navigate([item.id]);

    this.public_routes.update((routes) => {
      routes.forEach((item) => {
        item.active = false;
      });
      return routes;
    });

  }

  isActive(item: MenuItem_I) {
    return this.router.url.includes(item.id);

  }

}
