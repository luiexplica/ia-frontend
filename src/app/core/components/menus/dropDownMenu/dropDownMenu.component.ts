import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PopoverTriggerDirective } from '@directives/popover.directive';

@Component({
  selector: 'app-drop-down-menu',
  imports: [
    PopoverTriggerDirective
  ],
  templateUrl: './dropDownMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropDownMenuComponent { }
