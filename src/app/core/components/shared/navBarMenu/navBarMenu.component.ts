import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { NgClass } from '@angular/common';
import { MenuItem_I } from '@interfaces/menus.interface';

type MenuOrientation_Type = 'horizontal' | 'vertical';
type ItemsAlign = 'center' | 'start' | 'end';

@Component({
  selector: 'app-nav-bar-menu',
  imports: [
    ButtonComponent,
    NgClass,
  ],
  templateUrl: './navBarMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarMenuComponent {

  orientation = input<MenuOrientation_Type>('horizontal');
  menuList = input<MenuItem_I[]>([]);
  align = input<ItemsAlign>('center');

  setFullWidth() {
    return this.orientation() === 'vertical';
  }

}
