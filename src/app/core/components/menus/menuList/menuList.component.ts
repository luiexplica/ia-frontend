import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { MenuItem_I } from '@interfaces/menus.interface';

type MenuOrientation_Type = 'horizontal' | 'vertical';
type ItemsAlign = 'center' | 'start' | 'end';
@Component({
  selector: 'app-menu-list',
  imports: [
    ButtonComponent,
    NgClass,
  ],
  templateUrl: './menuList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {

  orientation = input<MenuOrientation_Type>('horizontal');
  menuList = input<MenuItem_I[]>([]);
  align = input<ItemsAlign>('center');

  setFullWidth() {
    return this.orientation() === 'vertical';
  }

}
