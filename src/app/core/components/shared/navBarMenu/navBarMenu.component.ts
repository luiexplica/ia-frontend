import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { MenuItem_I } from '@interfaces/menus.interface';
import { RouterUtilsService } from '@core/services/routerUtils.service';
import { TextButtonComponent } from '@components/buttons/textButton/textButton.component';

type MenuOrientation_Type = 'horizontal' | 'vertical';
type ItemsAlign = 'center' | 'start' | 'end';

@Component({
  selector: 'app-nav-bar-menu',
  imports: [
    TextButtonComponent,
    NgClass,
  ],
  templateUrl: './navBarMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarMenuComponent {

  orientation = input<MenuOrientation_Type>('horizontal');
  menuList = input<MenuItem_I[]>([]);
  align = input<ItemsAlign>('center');

  routerUtilsService = inject(RouterUtilsService);

  setFullWidth() {
    return this.orientation() === 'vertical';

  }

}
