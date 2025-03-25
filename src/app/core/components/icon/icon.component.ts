import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  value = computed( () => this.icon().value)
  safeIconValue = computed(() => {
    if(this.type() === 'html') return this.sanitizer.bypassSecurityTrustHtml(this.icon().value);
    return '';
  });
  // value = computed(() =>
  //   {
  //     console.log('entra computado');
  //     const value = this.icon().value;
  //     (this.type() === 'html') && this.safeIconValue.set(this.sanitizer.bypassSecurityTrustHtml(value));

  //       console.log('value', value);
  //       console.log('this.safeIconValue', this.safeIconValue());

  //     return value;
  //   }
  // );






 }
