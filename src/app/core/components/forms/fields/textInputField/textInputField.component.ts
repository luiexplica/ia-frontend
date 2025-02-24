import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { TextField_I } from '../../interfaces';
import { NgClass } from '@angular/common';
import { DUIInput } from 'david-ui-angular';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-text-input-field',
  imports: [
    DUIInput,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './textInputField.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputFieldComponent implements OnInit {

  default: TextField_I = {
    label: 'Nombre',
    name: 'nombre',
    placeholder: '',
    value: '55',
    size: "md",
    type: "text",
    validation_rules: [],
    classes: 'w-full'
  }
  atts = input<TextField_I>(this.default);
  formRef = input<FormGroup>(new FormGroup({}));

  id = signal<string>('');
  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setDefaults();
    this.setId();

  }

  setId() {
    const _id = 'text-field-' + Math.random().toString(36).substring(7);
    this.id.set(_id);

  }

  setDefaults() {
    Object.keys(this.default).forEach((key) => {
      if (!this.atts()[key]) {
        this.atts()[key] = this.default[key];
      }
    });

  }

}
