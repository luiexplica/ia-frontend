import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { LayoutRow_I } from '../../core/components/forms/interfaces';
import { formExperimental } from './form.def';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DUIInput } from 'david-ui-angular';
import { DynamicFormService } from '../../core/components/forms/services/DynamicForm.service';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-experimentals',
  imports: [
    FormLayoutComponent,
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

  // constructor(
  //   private dynamicFormService: DynamicFormService

  // ) {}

    constructor(
      private fb: FormBuilder,
      private dynamicFormService: DynamicFormService
      ) {
    // this.form = this.dynamicFormService.generateForm(formExperimental);
    this.form.set( this.dynamicFormService.generateForm( this.formRows() ) );
  }

  ngOnInit() {
    // this.form = this.dynamicFormService.generateForm(this.formRows());
    // console.log('this.form', this.form);

  }

  onSubmit() {
    if (this.form().valid) {
      console.log('Formulario enviado:', this.form().value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
