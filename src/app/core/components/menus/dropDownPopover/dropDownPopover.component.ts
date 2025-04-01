import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { MenuItem_I } from '@interfaces/menus.interface';
import { NestedMenuComponent } from '../nestedMenu/nestedMenu.component';

@Component({
  selector: 'app-drop-down-popover',
  imports: [
    ButtonModule,
    PopoverModule,
    NestedMenuComponent,
  ],
  templateUrl: './dropDownPopover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownPopoverComponent {

  title = input<string>('');
  menu = input<MenuItem_I[]>([
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
