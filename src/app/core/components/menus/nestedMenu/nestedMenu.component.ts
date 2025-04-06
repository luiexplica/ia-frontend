import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';
import { NgClass } from '@angular/common';
import { TextButtonComponent } from '@components/buttons/textButton/textButton.component';

@Component({
  selector: 'app-nested-menu',
  imports: [
    TextButtonComponent,
    NgClass,
  ],
  templateUrl: './nestedMenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedMenuComponent {

  menu = input<MenuItem_I[]>([]);

}
