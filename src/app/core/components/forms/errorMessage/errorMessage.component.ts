import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon_I } from '@interfaces/globals.interface';

type MessageType_Type = 'error' | 'warning' | 'success' | 'info';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './errorMessage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {

  type = input<MessageType_Type>('error');
  icon? = input<Icon_I>();
  text = input<string>('');

  setMessageColor() {

    switch (this.type()) {
      case 'error':
        return 'text-rose-400';
      case 'warning':
        return 'text-yellow-400';
      case 'success':
        return 'text-emerald-400';
      case 'info':
        return 'text-slate-400';
      default:
        return 'text-rose-400';
    }

   }

}
