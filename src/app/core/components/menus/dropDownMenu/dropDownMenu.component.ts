import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';

import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { ButtonComponent } from '@components/button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-drop-down-menu',
  imports: [
    ButtonModule,
    PopoverModule,
    ButtonComponent,
    NgClass
  ],
  templateUrl: './dropDownMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownMenuComponent {

  title = input<string>('');
  menuList = input<MenuItem_I[]>([
    // {
    //   title: 'Settings',
    //   active: false,
    //   action: (index: number) => {
    //     console.log('Settings');
    //   },
    //   id: 'settings',
    // },
    // {
    //   title: 'Logout',
    //   active: false,
    //   action: (index: number) => {
    //     console.log('Logout');
    //   },
    //   id: 'logout',
    // }
  ])

}
