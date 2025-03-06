import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { RouterLink, Router } from '@angular/router';
import { LayoutGlobalService } from '@services/layoutGlobal.service';
import { DynamicFormService } from '@components/forms/services/dynamicForm.service';
import { LayoutRow_I } from '@components/forms/interfaces';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { registerFormDef } from './register-form.defs';

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

  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...registerFormDef])

  layoutGlobalService = inject(LayoutGlobalService);

  constructor(
    // private fb: FormBuilder,
    private dynamicFormService: DynamicFormService,
    private router: Router

  ) {
    this.initForm();
  }

  initForm(){
    this.form.set(this.dynamicFormService.generateForm(this.formRows()));

  }

  ngOnInit(): void {
    this.layoutGlobalService.layoutFullScreen.set(true);
    this.layoutGlobalService.hideNavbar.set(true);
    this.layoutGlobalService.hideFooter.set(true);

  }

  emitSubmit() {

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);

  }

  onSubmit() {
    this.dynamicFormService.setSubmitted(this.form());
    if (this.form().valid) {
      console.log('Formulario enviado:', this.form().value);
      this.emitSubmit();
    } else {
      this.form().updateValueAndValidity();
      console.log('Formulario inválido');
    }

  }

}
