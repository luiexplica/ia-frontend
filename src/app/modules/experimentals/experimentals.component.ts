import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormLayoutComponent } from '@components/forms/formLayout/formLayout.component';
import { LayoutRow_I } from '../../core/components/forms/interfaces';
import { formExperimental } from './form.def';

@Component({
  selector: 'app-experimentals',
  imports: [
    FormLayoutComponent
  ],
  templateUrl: './experimentals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperimentalsComponent {

  formRows = signal<LayoutRow_I[]>([...formExperimental])




}
