import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutRow_I, ValidationRule_I } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor(private fb: FormBuilder) { }

  generateForm(layout: LayoutRow_I[]): FormGroup {
    const formGroup = this.fb.group({});

    layout.forEach((row) => {
      row.fields.forEach((field) => {
        const control = this.fb.control(
          field.props.value || '',
          this.getValidators(field.props.validation_rules)
        );
        formGroup.addControl(field.props.name, control);
      });
    });

    return formGroup;

  }

  private getValidators(rules: ValidationRule_I[] = []) {
    const validators = [];
    for (const [i, element] of rules.entries()) {
      if (element.type === 'required') {
        validators.push(Validators.required);
      }
      if (element.type === 'minLength') {
        const n = Number(element.value);
        validators.push(Validators.minLength(n));
      }
      if (element.type === 'maxLength') {
        const n = Number(element.value);
        validators.push(Validators.maxLength(n));
      }
      if (element.type === 'email') {
        validators.push(Validators.email);
      }
      if (element.type === 'tel') {
        validators.push(Validators.pattern(/^\+?([0-9]{1,3})?[-. (]*([0-9]{3})[-. )]*[0-9]{3}[-. ]*[0-9]{4}$/));
      }
      if (element.type === 'url') {
        validators.push(Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/));
      }

    }

    return validators;

  }

}
