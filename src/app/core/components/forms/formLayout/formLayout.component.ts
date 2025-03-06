import { AfterViewInit, ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { LayoutRow_I } from '../interfaces';

import { JsonPipe } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputFieldComponent } from '@components/forms/fields/textInputField/textInputField.component';
import { CheckboxInputFieldComponent } from '@components/forms/fields/checkboxInputField/checkboxInputField.component';

@Component({
  selector: 'app-form-layout',
  imports: [
    TextInputFieldComponent,
    CheckboxInputFieldComponent,
    ReactiveFormsModule,
    // JsonPipe
  ],
  templateUrl: './formLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutComponent implements AfterViewInit {

  formRef = input<FormGroup>(new FormGroup({}));
  formRows = input<LayoutRow_I[]>([]);

  // ngOnInit(): void {
  ngAfterViewInit(): void {
    setTimeout(() => {
      Object.values(this.formRef().controls).forEach(control => {
        control.markAsPristine();
        control.markAsUntouched();
      });

    }, 500);

  }

}
