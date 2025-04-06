import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { RippleDirective } from '@directives/ripple.directive';
import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-primary-button',
  imports: [
    IconComponent,
    NgClass,
    RippleDirective,
  ],
  templateUrl: './primaryButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent extends ButtonComponent implements OnInit {

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
     bg-primaryBlue !text-white border border-transparent shadow-md hover:shadow-lg focus:shadow-none active:bg-primaryBlue hover:bg-primaryBlue active:shadow-none`);

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
      this.rippleStyle.set('light');
      return;
    }
    this.rippleStyle.set('none');

  }


}
