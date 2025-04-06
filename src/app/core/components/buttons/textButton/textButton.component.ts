import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { JsonPipe, NgClass } from '@angular/common';
import { RippleDirective } from '@directives/ripple.directive';
import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-text-button',
  imports: [
    IconComponent,
    NgClass,
    RippleDirective,
  ],
  templateUrl: './textButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextButtonComponent extends ButtonComponent implements OnInit {

  constructor() {
    super();

  }

  ngOnInit(): void {
    this.initComponent();
    this._initComponent();

  }

  _initComponent(): void {
    this.setStyle();
    this.setRipple();

  }

  setStyle() {
    this.buttonClasses.set(`text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`);

  }

  get setActiveStyle(): string {
    if (!this.active()) return '';

    if (this.activeStyle() != '') {
      return this.activeStyle();

    }
    return `bg-slate-100`;

  }

  setRipple() {
    if (this.ripple()) {
      this.rippleStyle.set('dark');
      return;
    }
    this.rippleStyle.set('none');

  }

}
