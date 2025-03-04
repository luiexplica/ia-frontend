import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { TextField_I } from '@components/forms/interfaces';
import { JsonPipe, NgClass } from '@angular/common';
import { DUIInput } from 'david-ui-angular';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldHandler } from '@components/forms/classes/fieldHandler';
import { ErrorMessageComponent } from '@components/forms/errorMessage/errorMessage.component';


@Component({
  selector: 'app-text-input-field',
  imports: [
    DUIInput,
    ErrorMessageComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './textInputField.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputFieldComponent extends FieldHandler implements OnInit {

  default: TextField_I = {
    label: 'Nombre',
    name: 'nombre',
    placeholder: '',
    value: '',
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
    this.listenFieldChanges( this.formRef(), this.atts() );

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
