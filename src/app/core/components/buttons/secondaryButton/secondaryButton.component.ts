import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { RippleDirective } from '@directives/ripple.directive';
import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-secondary-button',
  imports: [
    IconComponent,
    NgClass,
    RippleDirective,
  ],
  templateUrl: './secondaryButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryButtonComponent extends ButtonComponent implements OnInit {

  constructor() {
    super();
    // this._initComponent();

  }

  ngOnInit(): void {
    this._initComponent();

  }

  _initComponent(): void {
    this.setStyle();
    this.setRipple();

  }

  setStyle() {
    this.buttonClasses.set(`
        border shadow-sm border-slate-300 hover:shadow-lg text-slate-600 hover:text-primaryBlue  hover:border-primaryBlue  focus:text-primaryBlue  focus:border-primaryBlue active:text-primaryBlue active:border-primaryBlue  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
      `);

  }

  get setActiveStyle(): string {

    if (!this.active()) return '';

    // if (this.buttonStyle() === 'text') {
    //   return `bg-slate-100`;

    // }
    if (this.activeStyle() != '') {
      return this.activeStyle();

    }
    return '';

  }

  setRipple() {
    if (this.ripple()) {
      this.rippleStyle.set('dark');
      return;
    }
    this.rippleStyle.set('none');

  }


}
