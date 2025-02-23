import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutRow_I } from '../interfaces';

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
          field.props.value || '', // Valor inicial
          this.getValidators(field.props.validation_rules)
        );
        formGroup.addControl(field.props.name, control);
      });
    });

    return formGroup;
  }

  private getValidators(rules: any[] = []) {
    const validators = [];
    // Aquí puedes mapear tus reglas de validación personalizadas a validadores de Angular
    // Por ejemplo:
    if (rules.includes('required')) {
      validators.push(Validators.required);
    }
    return validators;
  }

}
