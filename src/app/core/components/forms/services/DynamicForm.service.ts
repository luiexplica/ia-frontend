import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LayoutRow_I, Meta_Form_I } from '../interfaces';
import { sameValue_Validator } from '@components/forms/customValidators/sameField.validator';
import { setFieldValidators } from './setValidators';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {


  constructor(private fb: FormBuilder) {

  }

  generateForm(layout: LayoutRow_I[]): FormGroup {

    const formGroup = this.fb.group({});

    layout.forEach((row) => {
      row.fields.forEach((field) => {
        const control = this.fb.control(
          field.props.value || '',
          setFieldValidators(field)
        );
        formGroup.addControl(field.props.name, control);
      });
    });

    this.setMetaForm(formGroup);
    this.setGlobalValidators(formGroup, layout);
    return formGroup;

  }

  private setMetaForm(formGroup: FormGroup) {

    const metaForm: Meta_Form_I = {
      submitted: false
    }
    formGroup.addControl('metaForm', this.fb.control(metaForm));

  }

  setSubmitted(formGroup: FormGroup) {
    let metaForm: Meta_Form_I = formGroup.controls['metaForm'].value;
    formGroup.controls['metaForm'].setValue({
      ...metaForm,
      submitted: true
    });
  }

  private setGlobalValidators(formGroup: FormGroup, layout: LayoutRow_I[]) {

    layout.forEach((row) => {
      row.fields.forEach((field) => {

        const rules = field.props.validation_rules || [];
        rules.forEach(rule => {
          if (rule.type === 'same_valueField') {
            const _fp = sameValue_Validator(field.props.name, rule)
            formGroup.setValidators(_fp);

          }
        });

      });
    });

  }

  getFormValues<T = any>(formGroup: FormGroup): T {
    return formGroup.value as T;
  }

}
