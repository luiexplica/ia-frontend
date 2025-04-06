import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';
import { ButtonComponent } from '@app/core/components/buttons/button/button.component';
import { NgClass } from '@angular/common';
import { TextButtonComponent } from '../../buttons/textButton/textButton.component';

@Component({
  selector: 'app-nested-menu',
  imports: [
    ButtonComponent,
    TextButtonComponent,
    NgClass
  ],
  templateUrl: './nestedMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedMenuComponent {

  menu = input<MenuItem_I[]>([]);

}
