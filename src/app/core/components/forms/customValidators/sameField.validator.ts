
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";
import { ValidationRule_I } from "../interfaces";

export const sameValue_Validator = (field: string, rule: ValidationRule_I): ValidatorFn => {

  return (control: AbstractControl): ValidationErrors | null => {

    const {
      value,
      message
    } = rule;

    const group = control as FormGroup;
    const fieldControl = group.get(field);
    const compareControl = group.get(value as string);

    if (fieldControl && compareControl && fieldControl.value !== compareControl.value) {
      fieldControl.setErrors({ ...fieldControl.errors, same_valueField: {
        message: message,
        customType: 'same_valueField'
      } });
      return { sameValue: true };
    } else if (fieldControl && fieldControl.errors) {
      const { same_valueField, ...others } = fieldControl.errors;
      fieldControl.setErrors(Object.keys(others).length ? others : null);
    }
    return null;

  };

}