
import { ChangeDetectionStrategy, Component, input, output, OnInit, signal, effect } from '@angular/core';
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

  variant = signal<ButtonVariant>('filled');
  buttonClasses = signal<string>('');

  buttonEffect = effect(() => {

    this.setButtonClasses();

  })

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
  }

  setStyle() {

    if (this.buttonStyle() === 'primary') {
      this.buttonClasses.set(`
        ${this.className()}
        bg-primaryBlue
        !text-white
      `);
      this.variant.set('filled');

    }

    if (this.buttonStyle() === 'secondary') {
      this.buttonClasses.set(`
        ${this.className()}
      `);
      this.variant.set('outlined');

    }

    if (this.buttonStyle() === 'text') {
      this.buttonClasses.set(`
        ${this.className()}
      `);
      this.variant.set('text');

    }

  }

  click() {
    this.onClick.emit();

  }

}
