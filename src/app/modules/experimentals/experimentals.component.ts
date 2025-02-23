import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { LayoutRow_I } from '../../core/components/forms/interfaces';
import { formExperimental } from './form.def';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '../../core/components/forms/services/DynamicForm.service';
import { DUIInput } from 'david-ui-angular';

@Component({
  selector: 'app-experimentals',
  imports: [
    FormLayoutComponent,
    ReactiveFormsModule,
    DUIInput
  ],
  templateUrl: './experimentals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperimentalsComponent implements OnInit {

  formRows = signal<LayoutRow_I[]>([...formExperimental])

  form!: FormGroup;
  formConfig = formExperimental; // Usa la configuración del formulario

  constructor(
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.form = this.dynamicFormService.generateForm(this.formConfig);

    console.log('this.form', this.form);

  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
