import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { FieldUnion_Type } from "../interfaces";

export const setFieldValidators = (field: FieldUnion_Type) => {

  const validators = [];
  const rules = field.props.validation_rules || [];
  for (const [i, element] of rules.entries()) {
    if (element.type === 'required') {
      // validators.push(Validators.required);
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.required(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El campo es requerido',
              // customType: 'required'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'min_length') {
      const n = Number(element.value);
      // validators.push(Validators.minLength(n));
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.minLength(n)(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El formato de la URL no es válido',
              // customType: 'url'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'max_length') {
      const n = Number(element.value);
      // validators.push(Validators.maxLength(n));
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.maxLength(n)(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El formato de la URL no es válido',
              // customType: 'url'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'email') {
      // validators.push(Validators.email);
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.email(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El formato de correo no es válido',
              // customType: 'email'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'tel') {
      // validators.push(Validators.pattern(/^\+?([0-9]{1,3})?[-. (]*([0-9]{3})[-. )]*[0-9]{3}[-. ]*[0-9]{4}$/));
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.pattern(/^\+?([0-9]{1,3})?[-. (]*([0-9]{3})[-. )]*[0-9]{3}[-. ]*[0-9]{4}$/)(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El formato de teléfono no es válido',
              // customType: 'tel'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'url') {
      // validators.push(Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/));
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El formato de la URL no es válido',
              // customType: 'url'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'password') {
      // validators.push(Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/));
      validators.push((control: AbstractControl): ValidationErrors | null => {
        const error = Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'La contraseña no cumple con el formato requerido',
              // customType: 'password'
            }
          };
        }
        return null;

      });
    }
    if (element.type === 'required_true') {
      validators.push((control: AbstractControl): ValidationErrors | null => {

        const error = Validators.requiredTrue(control);
        if (error) {
          return {
            [element.type]: {
              message: element.message || 'El campo es requerido',
              // customType: 'required_true'
            }
          };
        }
        return null;

      });
    }
  }
  return validators;

}