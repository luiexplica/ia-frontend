import { AbstractControl, FormGroup } from "@angular/forms";
import { TextField_I } from "../interfaces";
import { signal } from "@angular/core";

export class FieldHandler {

  errorMessage = signal<string>('');
  initField = signal<boolean>(false)

  constructor() {
    this.clearErrorMessage();
    this.init();

  }

  init() {
    setTimeout(() => {
        this.initField.set(true);

    }, 100);

  }

  listenFieldChanges(formRef: FormGroup, atts: any) {

    formRef.valueChanges.subscribe((value) => {

      console.log('value', value);

      const control = formRef.get(atts.name);
      if (control) {
        (control.invalid) ? this.catchErrors(control) : this.clearErrorMessage();
      }

    })

  }

  private compareErros(a: string, b: string) {
    if (a === b) return true;
    if (a.toLowerCase() === b.toLowerCase()) return true;
    if (a.replace('_', '') === b.replace('_', '')) return true;
    return false;
  }

  catchErrors(control: AbstractControl) {

    const errors = control.errors;
    if (!errors) return;
    // console.log('errors', errors);
    // console.log('control', control);

    const errorMessage = errors[Object.keys(errors)[0]].message;
    this.setMessage(errorMessage || '');

  }

  clearErrorMessage() {
    this.errorMessage.set('');

  }

  setMessage(message: string) {
    this.errorMessage.set(message);

  }

}