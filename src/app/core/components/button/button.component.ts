
import { ChangeDetectionStrategy, Component, input, output, OnInit, signal } from '@angular/core';
import { DUIButton } from 'david-ui-angular';

export type ButtonStyle = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonVariant = 'filled' | 'outlined' | 'gradient' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonIcon_I {
  type: 'string' | 'html';
  value: string;
}

@Component({
  selector: 'app-button',
  imports: [
    DUIButton
  ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  buttonStyle = input<ButtonStyle>('primary');
  fullWidth = input(false);
  size = input<ButtonSize>('md');
  rouded = input(false);
  ripple = input<boolean>(true);
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  className = input<string>('');

  onClick = output();
  loaded = signal(false);

  style_class = signal<string>('');
  variant = signal<ButtonVariant>('filled');
  buttonClasses = signal<string>('');

  constructor() {
  }

  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setButtonClasses();

  }

  setButtonClasses() {
    this.setStyle();
    this.buttonClasses.set(`
    ${this.style_class()}
    `)

  }

  setStyle() {
    if (this.buttonStyle() === 'primary') {
      this.style_class.set(`
        ${this.className()}
        bg-primaryBlue
        !text-white,
      `);
      this.variant.set('filled');

    }

    if (this.buttonStyle() === 'secondary') {
      this.style_class.set(`
        ${this.className()}
      `);
      this.variant.set('outlined');

    }

    if (this.buttonStyle() === 'text') {
      this.style_class.set(`
        ${this.className()}
      `);
      this.variant.set('text');

    }

  }

  click() {
    this.onClick.emit();

  }

}
