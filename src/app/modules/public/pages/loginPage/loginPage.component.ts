import { loginFormDef } from './login-form.defs';

import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { LayoutGlobalService } from '@services/layoutGlobal.service';
import { ButtonComponent } from "@components/button/button.component";
import { Router, RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '@components/forms/services/dynamicForm.service';
import { LayoutRow_I } from '@components/forms/interfaces';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';

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
export class LoginPageComponent implements OnInit {


  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...loginFormDef])

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
