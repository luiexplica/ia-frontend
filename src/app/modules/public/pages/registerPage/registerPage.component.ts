import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LayoutGlobalService } from '@app/core/services/layoutGlobal.service';
import { DynamicFormService } from '@components/forms/services/dynamicForm.service';
import { LayoutRow_I } from '@components/forms/interfaces';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { RegisterForm_I, registerFormDef } from './register-form.defs';
import { AuthService } from '@services/auth.service';
import { uiService } from '@app/core/services/ui.service';
import { PrimaryButtonComponent } from '@components/buttons/primaryButton/primaryButton.component';

@Component({
  selector: 'app-register-page',
  imports: [
    PrimaryButtonComponent,
    FormLayoutComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registerPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnInit {

  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...registerFormDef])

  layoutGlobalService = inject(LayoutGlobalService);

  authService = inject(AuthService);
  router = inject(Router);
  dynamicFormService = inject(DynamicFormService);
  uiService = inject(uiService);

  isLoading = signal(false);

  constructor(
  ) {
    this.initForm();

  }

  initForm() {
    this.form.set(this.dynamicFormService.generateForm(this.formRows()));

  }

  ngOnInit(): void {
    this.layoutGlobalService.setLayoutFullScreen();
    // this.dynamicFormService.setFormValues<RegisterForm_I>(this.form(), {
    //   email: 'alvarosego01@gmail.com',
    //   name: 'alvaro',
    //   last_name: 'segovia',
    //   password: 'Aa_12345',
    //   password_confirm: 'Aa_12345',
    //   terms_conditions: true
    // })

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);

  }

  async onSubmit() {

    this.dynamicFormService.setSubmitted(this.form());
    if (!this.form().valid) {
      this.form().updateValueAndValidity();
      return;
    }
    this.isLoading.set(true);

    const formValues = this.dynamicFormService.getFormValues<RegisterForm_I>(this.form());

    try {
      await this.authService.register({
        email: formValues.email,
        password: formValues.password,
        name: formValues.name,
        last_name: formValues.last_name
      });

    } catch (error) {

    }
    this.isLoading.set(false);

  }

}
