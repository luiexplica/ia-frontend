import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon_I } from '@interfaces/globals.interface';
import { FieldStatus_Type } from '../interfaces';
import { get_fieldStatusColor } from '../common/common';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './errorMessage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {

  type = input<FieldStatus_Type>('error');
  icon? = input<Icon_I>();
  text = input<string>('');

  setMessageColor() {
    return get_fieldStatusColor(this.type());
  }

}
