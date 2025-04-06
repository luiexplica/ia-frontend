import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon_I } from '@interfaces/globals.interface';

@Component({
  selector: 'app-icon',
  imports: [
  ],
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {

  sanitizer = inject(DomSanitizer);

  icon = input.required<Icon_I>();
  className = input<string>('');
  type = computed(() => this.icon().type);
  value = computed(() => this.icon().value)
  safeIconValue = computed(() => {
    if (this.type() === 'html') return this.sanitizer.bypassSecurityTrustHtml(this.icon().value);
    return '';
  });

}
