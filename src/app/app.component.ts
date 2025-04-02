import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AuthService } from './services/auth.service';
import { UiStoreService } from './core/store/store-services/ui.store.service';
import { RouterUtilsService } from './core/services/routerUtils.service';
import { LayoutGlobalService } from './core/services/layoutGlobal.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgxSonnerToaster
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'ia-frontend';
  authService = inject(AuthService);
  routerUtilsService = inject(RouterUtilsService);
  layoutGlobalService = inject(LayoutGlobalService);

  screenSize = computed(() => this.layoutGlobalService.screenSize());

  uiStore = inject(UiStoreService);

  open(){
    this.uiStore.onToggleSidebar();

  }

  ngOnInit(): void {
    this.initComponent();

  }

  async initComponent() {
    await this.authService.checkSession();

  }

}
