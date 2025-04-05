
import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, OnInit, signal, effect } from '@angular/core';
import { RippleColor, RippleDirective } from '@directives/ripple.directive';
import { Icon_I } from '@interfaces/globals.interface';
import { IconComponent } from '../icon/icon.component';

export type ButtonStyle = 'primary' | 'secondary' | 'text' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonVariant = 'filled' | 'outlined' | 'gradient' | 'text';
export type ButtonSize = 'xm' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTextAlign = 'left' | 'center' | 'right';

@Component({
  selector: 'app-button',
  imports: [
    IconComponent,
    NgClass,
    RippleDirective,
  ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

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
  })


  ngOnInit(): void {
    this.initComponent();

  }

  initComponent() {
    this.setStyle();
    this.setSize();
    this.setRipple();
    this.setRounded();
    this.setFullWidth();
    this.setAlign();
    this.setIconClasses();

  }



  setStyle() {
    if (this.buttonStyle() === 'primary') {
      this.buttonClasses.set(`${this.className()} bg-primaryBlue !text-white border border-transparent shadow-md hover:shadow-lg focus:shadow-none active:bg-primaryBlue hover:bg-primaryBlue active:shadow-none`);

    }
    if (this.buttonStyle() === 'secondary') {
      this.buttonClasses.set(`
        ${this.className()} border shadow-sm border-slate-300 hover:shadow-lg text-slate-600 hover:text-primaryBlue  hover:border-primaryBlue  focus:text-primaryBlue  focus:border-primaryBlue active:text-primaryBlue active:border-primaryBlue  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      `);

    }
    if (this.buttonStyle() === 'text') {
      this.buttonClasses.set(`
        ${this.className()} text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      `);

    }

  }

  setActiveStyle(): string{

    if(!this.active()) return '';

    if (this.buttonStyle() === 'primary') {

    }
    if (this.buttonStyle() === 'primary') {

    }
    if (this.buttonStyle() === 'text') {
      return `bg-slate-100`;

    }
    if(this.activeStyle() != '') {
      return this.activeStyle();

    }

    return '';

  }

  setAlign() {
    if (this.align() === 'left') {
      this.buttonClasses.set(`${this.buttonClasses()} flex !justify-left
      `);
      return
    }
    this.buttonClasses.set(`${this.buttonClasses()} flex !justify-center `);

  }

  setSize() {
    if (this.size() === 'xm') {
      this.buttonClasses.set(`${this.buttonClasses()} py-1 px-2.5 text-sm h-8`);
    }
    if (this.size() === 'sm') {
      this.buttonClasses.set(`${this.buttonClasses()} py-1.5 px-3 text-sm h-9`);
    }
    if (this.size() === 'md') {
      this.buttonClasses.set(`${this.buttonClasses()} py-2 px-4 text-sm h-10`);
    }
    if (this.size() === 'lg') {
      this.buttonClasses.set(`${this.buttonClasses()} py-2.5 px-5 text-base h-12`);
    }
    if (this.size() === 'xl') {
      this.buttonClasses.set(`${this.buttonClasses()} py-3.5 px-6 text-base h-14`);
    }

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

  setRipple() {
    if (this.ripple()) {
      const caseLight: ButtonStyle[] = ['primary'];
      const caseDark: ButtonStyle[] = ['text', 'secondary'];

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
