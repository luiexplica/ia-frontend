import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PublicBodyLayoutComponent } from '../../core/layouts/publicBodyLayout/publicBodyLayout.component';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { NavBarComponent } from '../../core/components/shared/navBar/navBar.component';
import { FooterComponent } from '../../core/components/shared/footer/footer.component';
import { public_routes } from './public.routes';

@Component({
  selector: 'public',
  imports: [
    PublicBodyLayoutComponent,
    FooterComponent,
    NavBarComponent,
    RouterOutlet,
  ],
  templateUrl: './public.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicComponent  {

  public_routes: Routes = public_routes;

  constructor(){

  }


 }
