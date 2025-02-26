import { AbstractControl, FormGroup } from "@angular/forms";
import { TextField_I } from "../interfaces";
import { signal } from "@angular/core";

export class FieldHandler {

  errorMessage = signal<string>('');

  constructor() {
    this.clearErrorMessage();
  }

  listenFieldChanges(formRef: FormGroup, atts: TextField_I) {
    formRef.valueChanges.subscribe((value) => {
      const control = formRef.get(atts.name);
      if (control) {
        (control.invalid) ? this.catchErrors(control, atts) : this.clearErrorMessage();
      }

    })

  }

  catchErrors(control: AbstractControl, atts: TextField_I) {

    if (!atts.validation_rules || atts.validation_rules.length == 0) return;

    const errors = control.errors;
    if (!errors) return;

    const errorKey = Object.keys(errors).find((key) => atts.validation_rules!.find((rule) => rule.type === key));

    if (errorKey) {
      const errorMessage = atts.validation_rules!.find((rule) => rule.type === errorKey)!.message;
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