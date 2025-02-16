import { Routes } from '@angular/router';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  imports: [],
  templateUrl: './navBar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {

  menuItems = input.required<Routes>()

 }
