import { LoginForm_I, loginFormDef } from './login-form.defs';

import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { LayoutGlobalService } from '@app/core/services/layoutGlobal.service';
import { ButtonComponent } from "@components/button/button.component";
import { Router, RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '@components/forms/services/dynamicForm.service';
import { LayoutRow_I } from '@components/forms/interfaces';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { ToastsService } from '@core/services/toasts.service';
import { AuthService } from '@services/auth.service';
import { handlerError } from '@api/handlerError';
import { SessionStoreService } from '@app/core/store/services/session.store.service';

@Component({
  selector: 'app-login-page',
  imports: [
    ButtonComponent,
    FormLayoutComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './loginPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, OnDestroy {

  layoutGlobalService = inject(LayoutGlobalService);
  authService = inject(AuthService);
  sessionService = inject(SessionStoreService);
  dynamicFormService = inject(DynamicFormService);
  toastService = inject(ToastsService);

  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...loginFormDef])
  router = inject(Router);

  isLoading = signal(false);

  constructor(

  ) {
    this.initForm();

  }

  initForm() {
    this.form.set(this.dynamicFormService.generateForm(this.formRows()));

  }

  ngOnDestroy(): void {
    this.layoutGlobalService.setLayoutDefault();

  }

  ngOnInit(): void {
    this.layoutGlobalService.setLayoutFullScreen();

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);

  }

  async onSubmit() {
    this.isLoading.set(true);

    this.dynamicFormService.setSubmitted(this.form());
    if (!this.form().valid) {
      this.form().updateValueAndValidity();
      return;
    }
    const formValues = this.dynamicFormService.getFormValues<LoginForm_I>(this.form());

    try {
      await this.authService.login({
        email: formValues.email,
        password: formValues.password
      });

      this.toastService.emitToast({
        title: 'Bienvenido',
        type: 'success'
      });

      this.router.navigate(['/dashboard']);

    } catch (error) {

      const err = handlerError(error);
      const msg = 'Error al iniciar sesión';
      this.toastService.emitToast({
        title: msg,
        type: 'error'
      });

    }
    this.isLoading.set(false);

  }

}
