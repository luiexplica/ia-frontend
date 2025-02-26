import { ButtonComponent } from './../../core/components/button/button.component';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { LayoutRow_I } from '../../core/components/forms/interfaces';
import { formExperimental } from './form.def';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DUIInput } from 'david-ui-angular';
import { JsonPipe } from '@angular/common';
import { DynamicFormService } from '../../core/components/forms/services/dynamicForm.service';

@Component({
  selector: 'app-experimentals',
  imports: [
    FormLayoutComponent,
    ButtonComponent,
    ReactiveFormsModule,
    DUIInput,
    JsonPipe
  ],
  templateUrl: './experimentals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperimentalsComponent implements OnInit {

  form = signal<FormGroup>(new FormGroup({}));
  formRows = signal<LayoutRow_I[]>([...formExperimental])

  constructor(
    private fb: FormBuilder,
    private dynamicFormService: DynamicFormService
  ) {
    this.form.set(this.dynamicFormService.generateForm(this.formRows()));
  }

  ngOnInit() {
    this.listenChanges();

  }

  onSubmit() {

    this.form().markAllAsTouched();

    if (this.form().valid) {
      console.log('Formulario enviado:', this.form().value);
    } else {
      console.log('Formulario inválido');
    }

  }

  listenChanges(){
    // console.log('init');
    this.form().valueChanges.subscribe(value => {
      // console.log('form', this.form().controls);
    });
  }

}
