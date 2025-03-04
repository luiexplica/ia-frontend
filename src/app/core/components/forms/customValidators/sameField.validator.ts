
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export const sameValue_Validator = (field: string, compareTo: string, message: string): ValidatorFn => {

  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup;
    const fieldControl = group.get(field);
    const compareControl = group.get(compareTo);

    if (fieldControl && compareControl && fieldControl.value !== compareControl.value) {
      fieldControl.setErrors({ ...fieldControl.errors, same_valueField: message });
      return { sameValue: true };
    } else if (fieldControl && fieldControl.errors) {
      const { same_valueField, ...others } = fieldControl.errors;
      fieldControl.setErrors(Object.keys(others).length ? others : null);
    }
    return null;

  };

}