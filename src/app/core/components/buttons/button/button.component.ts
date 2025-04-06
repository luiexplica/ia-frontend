
import { ChangeDetectionStrategy, Component, input, output, signal, effect } from '@angular/core';
import { RippleColor } from '@directives/ripple.directive';
import { Icon_I } from '@interfaces/globals.interface';

export type ButtonStyle = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonVariant = 'filled' | 'outlined' | 'gradient' | 'text';
export type ButtonSize = 'xm' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTextAlign = 'left' | 'center' | 'right';

@Component({
  imports: [
  ],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  buttonStyle = input<ButtonStyle>('primary');
  fullWidth = input(false);
  size = input<ButtonSize>('md');
  rounded = input(false);
  active = input<boolean>(false);
  activeStyle = input<string>('');
  ripple = input<boolean>(true);
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  className = input<string>('');
  text = input<string>('');
  icon = input<Icon_I>();
  align = input<ButtonTextAlign>('center');
  uppercase = input<boolean>(false);
  bold = input<boolean>(false);

  onClick = output();
  loaded = signal(false);

  // activeStyle = input<string>('');
  buttonClasses = signal<string>('');
  iconClasses = signal<string>('');
  rippleStyle = signal<RippleColor>('none');
  buttonEffect = effect(() => {

    // if (this.isLoading() || this.disabled()) {
    //   this.buttonClasses.update(classes => `${classes} cursor-not-allowed`);

    //   console.log('this.buttonClasses', this.buttonClasses());

    // }
  });

  constructor() {
    this.initComponent();

  }

  initComponent() {
    this.setIconClasses();

  }


  get setAlign(): string {
    if (this.align() === 'left') {
      return `flex !justify-left`;
    }
    return `flex !justify-center`;

  }

  get setSize(): string {
    if (this.size() === 'xm') {
      return `py-1 px-2.5 text-sm h-8`;
    }
    if (this.size() === 'sm') {
      return `py-1.5 px-3 text-sm h-9`;
    }
    if (this.size() === 'md') {
      return `py-2 px-4 text-sm h-10`;
    }
    if (this.size() === 'lg') {
      return `py-2.5 px-5 text-base h-12`;
    }
    if (this.size() === 'xl') {
      return `py-3.5 px-6 text-base h-14`;
    }

    return '';

  }

  setIconClasses() {
    if (!this.icon()) return;

    if (this.size() === 'xm') {
      this.iconClasses.set('text-base');

    }
    if (this.size() === 'sm') {
      this.iconClasses.set('text-base');
    }
    if (this.size() === 'md') {
      this.iconClasses.set('text-lg');

    }
    if (this.size() === 'lg') {
      this.iconClasses.set('text-lg');

    }
    if (this.size() === 'xl') {
      this.iconClasses.set('text-xl');

    }

  }

  get setRounded(): string {
    if (this.rounded()) {
      return `rounded-full`;

    }
    return `rounded-md`

  }

  get setFullWidth(): string {
    if (this.fullWidth()) {
      return ` w-full`;
    }
    return '';

  }

  click() {
    if (this.disabled() || this.isLoading()) {
      return;
    }
    this.onClick.emit();

  }

}
