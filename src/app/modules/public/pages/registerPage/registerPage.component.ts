import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { RouterLink, Router } from '@angular/router';
import { LayoutGlobalService } from '@app/core/services/layoutGlobal.service';
import { DynamicFormService } from '@components/forms/services/dynamicForm.service';
import { LayoutRow_I } from '@components/forms/interfaces';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { RegisterForm_I, registerFormDef } from './register-form.defs';
import { AuthService } from '@services/auth.service';
import { ToastsService } from '@core/services/toasts.service';
import { handlerError } from '@api/handlerError';
import { Store } from '@ngrx/store';
import { PublicState_I } from '@public/store/public.reducers';
import { registerActions } from '@public/store/actions/register.actions';

@Component({
  selector: 'app-register-page',
  imports: [
    ButtonComponent,
    FormLayoutComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registerPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {

  private readonly store = inject(Store);

  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...registerFormDef])

  layoutGlobalService = inject(LayoutGlobalService);

  authService = inject(AuthService);
  router = inject(Router);
  dynamicFormService = inject(DynamicFormService);
  toastService = inject(ToastsService);

  readonly isLoading = this.store.selectSignal( (state: PublicState_I) =>  state.public.register.isLoading );


  constructor(
  ) {
    this.initForm();

  }

  initForm() {
    this.form.set(this.dynamicFormService.generateForm(this.formRows()));

  }

  ngOnInit(): void {
    this.layoutGlobalService.layoutFullScreen.set(true);
    this.layoutGlobalService.hideNavbar.set(true);
    this.layoutGlobalService.hideFooter.set(true);

    this.dynamicFormService.setFormValues<RegisterForm_I>(this.form(), {
      email: 'alvarosego01@gmail.com',
      name: 'alvaro',
      last_name: 'segovia',
      password: 'Aa_12345',
      password_confirm: 'Aa_12345',
      terms_conditions: true
    })

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);

  }

  async onSubmit() {

    this.store.dispatch(registerActions.isLoading({isLoading: true}));

    return

    this.dynamicFormService.setSubmitted(this.form());
    if (!this.form().valid) {
      this.form().updateValueAndValidity();
      return;
    }
    const formValues = this.dynamicFormService.getFormValues<RegisterForm_I>(this.form());

    try {

      await this.authService.register({
        email: formValues.email,
        password: formValues.password,
        name: formValues.name,
        last_name: formValues.last_name
      });

      this.toastService.emitToast({
        title: 'Usuario registrado',
        type: 'success'
      })

    } catch (error) {

      const err = handlerError(error);
      const msg = err.message || 'Error al registrar usuario';
      this.toastService.emitToast({
        title: msg,
        type: 'error'
      });

    }

  }

}
