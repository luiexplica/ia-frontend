
import { LayoutGlobalService } from '@app/core/services/layoutGlobal.service';
import { ChangeDetectionStrategy, Component, signal, effect, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@components/shared/navBar/navBar.component';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { MenuItem_I } from '@interfaces/menus.interface';

@Component({
  selector: 'public',
  imports: [
    FooterComponent,
    NavBarComponent,
    RouterOutlet,
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
  ])

  fullWidth = signal<boolean>(false);
  hideNavbar = signal<boolean>(false);
  hideFooter = signal<boolean>(false);

  layoutGlobalService = inject(LayoutGlobalService);

  router = inject(Router);

  logEffect = effect(() => {
    this.fullWidth.set(this.layoutGlobalService.layoutFullScreen());
    this.hideNavbar.set(this.layoutGlobalService.hideNavbar());
    this.hideFooter.set(this.layoutGlobalService.hideFooter());
    // return () => {
    // console.log('logEffect disposed');
    // };

  });

  ngOnInit(): void {
    this.initComponent();
  }

  initComponent(){
    this.setActiveRoute();

  }

  setActiveRoute(){
    this.public_routes.update((routes) => {
      routes.forEach((item) => {
        item.active = false;

        if(this.router.url.includes(item.id)){
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
