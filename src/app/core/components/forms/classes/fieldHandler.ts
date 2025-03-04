import { AbstractControl, FormGroup } from "@angular/forms";
import { TextField_I } from "../interfaces";
import { signal } from "@angular/core";

export class FieldHandler {

  errorMessage = signal<string>('');

  constructor() {
    this.clearErrorMessage();

  }

  listenFieldChanges(formRef: FormGroup, atts: any ) {
    formRef.valueChanges.subscribe((value) => {
      const control = formRef.get(atts.name);
      if (control) {
        (control.invalid) ? this.catchErrors(control, atts) : this.clearErrorMessage();
      }

    })

  }

  private compareErros(a: string, b: string) {
    if (a === b) return true;
    if (a.toLowerCase() === b.toLowerCase()) return true;
    if (a.replace('_', '') === b.replace('_', '')) return true;
    return false;

  }

  catchErrors(control: AbstractControl, atts: TextField_I) {

    if (!atts.validation_rules || atts.validation_rules.length == 0) return;

    const errors = control.errors;

    if (!errors) return;

    const errorKey = Object.keys(errors).find(
      (key) => atts.validation_rules!.find(
        (rule) => this.compareErros(rule.type, key)
      ));

    console.log('errors', errors);
    console.log('errorKey', errorKey);
    if (errorKey) {
      const errorMessage = atts.validation_rules!.find(
        (rule) => this.compareErros(rule.type, errorKey)
      )!.message;
      this.setMessage(errorMessage || '');
    }

  }

  clearErrorMessage() {
    this.errorMessage.set('');

  }

  setMessage(message: string) {
    this.errorMessage.set(message);

  }

}