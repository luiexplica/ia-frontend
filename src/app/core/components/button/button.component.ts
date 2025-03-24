
import { ChangeDetectionStrategy, Component, input, output, OnInit, signal, effect } from '@angular/core';
import { RippleColor, RippleDirective } from '@directives/ripple.directive';

export type ButtonStyle = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonVariant = 'filled' | 'outlined' | 'gradient' | 'text';
export type ButtonSize = 'xm' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonTextAlign = 'left' | 'center' | 'right';
export interface ButtonIcon_I {
  type: 'string' | 'html';
  value: string;
}

@Component({
  selector: 'app-button',
  imports: [
    // DUIButton,
    RippleDirective
  ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  buttonStyle = input<ButtonStyle>('primary');
  fullWidth = input(false);
  size = input<ButtonSize>('md');
  rounded = input(false);
  ripple = input<boolean>(true);
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  className = input<string>('');
  text = input<string>('');
  align = input<ButtonTextAlign>('center');

  onClick = output();
  loaded = signal(false);

  buttonClasses = signal<string>('');
  rippleStyle = signal<RippleColor>('none');
  buttonEffect = effect(() => {

    // if (this.isLoading() || this.disabled()) {
    //   this.buttonClasses.update(classes => `${classes} cursor-not-allowed`);

    //   console.log('this.buttonClasses', this.buttonClasses());

    // }

  })


  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setStyle();
    this.setAlign();
    this.setSize();
    this.setRipple();
    this.setRounded();
    this.setFullWidth();

  }

  setStyle() {
    if (this.buttonStyle() === 'primary') {
      this.buttonClasses.set(`${this.className()} bg-primaryBlue !text-white border border-transparent shadow-md hover:shadow-lg focus:shadow-none active:bg-primaryBlue hover:bg-primaryBlue active:shadow-none`);

    }
    if (this.buttonStyle() === 'secondary') {
      this.buttonClasses.set(`
        ${this.className()} border shadow-sm border-slate-300 hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      `);

    }
    if (this.buttonStyle() === 'text') {
      this.buttonClasses.set(`
        ${this.className()} text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      `);

    }

  }

  setAlign() {
    if (this.align() === 'left') {
      this.buttonClasses.set(`${this.buttonClasses()} flex !items-left
      `);
    }

  }

  setSize() {
    if (this.size() === 'xm') {
      this.buttonClasses.set(`${this.buttonClasses()} py-1 px-2.5 text-sm `);
    }
    if (this.size() === 'sm') {
      this.buttonClasses.set(`${this.buttonClasses()} py-1.5 px-3 text-sm `);
    }
    if (this.size() === 'md') {
      this.buttonClasses.set(`${this.buttonClasses()} py-2 px-4 text-sm `);
    }
    if (this.size() === 'lg') {
      this.buttonClasses.set(`${this.buttonClasses()} py-2.5 px-5 text-base `);
    }
    if (this.size() === 'xl') {
      this.buttonClasses.set(`${this.buttonClasses()} py-3.5 px-6 text-base `);
    }

  }

  setRipple() {
    if (this.ripple()) {
      const caseLight: ButtonStyle[] = ['primary'];
      const caseDark: ButtonStyle[] = ['secondary', 'text'];

      if (caseLight.includes(this.buttonStyle())) {
        this.rippleStyle.set('light');
      }
      if (caseDark.includes(this.buttonStyle())) {
        this.rippleStyle.set('dark');
      }
      return;

    }
    this.rippleStyle.set('none');

  }

  setRounded() {
    if (this.rounded()) {
      this.buttonClasses.set(`${this.buttonClasses()} rounded-full`);
      return;
    }
    this.buttonClasses.set(`${this.buttonClasses()} rounded-md`);

  }

  setFullWidth() {
    if (this.fullWidth()) {
      this.buttonClasses.set(`${this.buttonClasses()} w-full`);
    }

  }

  click() {
    if (this.disabled() || this.isLoading()) {
      return;
    }
    this.onClick.emit();

  }

}
