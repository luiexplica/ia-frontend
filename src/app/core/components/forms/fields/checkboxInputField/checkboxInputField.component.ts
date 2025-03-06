import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '@components/forms/errorMessage/errorMessage.component';
import { CheckBoxField_I } from '../../interfaces';
import { FieldHandler } from '../../classes/fieldHandler';

@Component({
  selector: 'app-checkbox-input-field',
  imports: [
    ErrorMessageComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './checkboxInputField.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxInputFieldComponent extends FieldHandler implements OnInit {

  default: CheckBoxField_I = {
    name: '--check--',
    label: 'Checkbox',
    validation_rules: [],
    classes: 'w-full',

  }

  atts = input<CheckBoxField_I>(this.default);
  formRef = input<FormGroup>(new FormGroup({}));
  id = signal<string>('');

  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setId();
    this.listenFieldChanges(this.formRef(), this.atts());

  }

  setId() {
    const _id = 'checkbox-field-' + Math.random().toString(36).substring(7);
    this.id.set(_id);

  }


}
