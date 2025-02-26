import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LayoutRow_I } from '../interfaces';

import { JsonPipe } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputFieldComponent } from '../fields/textInputField/textInputField.component';

@Component({
  selector: 'app-form-layout',
  imports: [
    TextInputFieldComponent,
    ReactiveFormsModule,
    // JsonPipe
  ],
  templateUrl: './formLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutComponent {

  formRef = input<FormGroup>(new FormGroup({}));
  formRows = input<LayoutRow_I[]>([]);


}
