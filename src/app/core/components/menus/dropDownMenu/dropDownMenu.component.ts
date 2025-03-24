import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';
import { PopoverTriggerDirective } from '@directives/popover.directive';

import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { ButtonComponent } from '@components/button/button.component';
import { RippleDirective } from '../../../directives/ripple.directive';

@Component({
  selector: 'app-drop-down-menu',
  imports: [
    // PopoverTriggerDirective
    ButtonModule,
    PopoverModule,
    ButtonComponent,
    RippleDirective
  ],
  templateUrl: './dropDownMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownMenuComponent {

  menuList = input<MenuItem_I[]>([
    {
      title: 'Settings',
      active: false,
      action: (index: number) => {
        console.log('Settings');
      },
      id: 'settings',
    },
    {
      title: 'Logout',
      active: false,
      action: (index: number) => {
        console.log('Logout');
      },
      id: 'logout',
    }
  ])


}
