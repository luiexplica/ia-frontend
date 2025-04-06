import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ButtonComponent } from '@app/core/components/buttons/button/button.component';
import { NgClass } from '@angular/common';
import { MenuItem_I } from '@interfaces/menus.interface';
import { RouterUtilsService } from '../../../services/routerUtils.service';
import { TextButtonComponent } from '../../buttons/textButton/textButton.component';

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
