import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Icon_I } from '@interfaces/globals.interface';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {

  icon = input.required<Icon_I>();
  className = input<string>('');
  type = computed(() => this.icon().type);
  value = computed(() => this.icon().value);

 }
