import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LayoutRow_I } from '../interfaces';
import { TextInputFieldComponent } from '../fields/textInputField/textInputField.component';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-layout',
  imports: [
    TextInputFieldComponent,
    JsonPipe
  ],
  templateUrl: './formLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutComponent {

  formRows = input<LayoutRow_I[]>([]);

}
