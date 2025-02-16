import { ChangeDetectionStrategy, Component, input, output, OnInit, signal } from '@angular/core';

export type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonType = 'normal' | 'normal-block' | 'rounded' | 'rounded-block';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ButtonIcon_I {
  type: 'string' | 'html';
  value: string;
}

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  // title = input<string>('title');
  style = input<ButtonStyle>('primary');
  type = input<ButtonType>('normal');
  size = input<ButtonSize>('md');
  ripple = input<boolean>(true);
  disabled = input<boolean>(false);
  // icon = input<ButtonIcon_I | null>(null);
  onClick = output();

  loaded = signal(false);
  size_class = signal<string>('');
  style_class = signal<string>('');

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

    this.setSize();
    this.setStyle();

    this.buttonClasses.set(`
    ${this.size_class()}
    ${this.style_class()}
    `)

  }

  setStyle() {
    if (this.style() === 'primary') {
      this.style_class.set(`
        bg-primaryBlue
        text-white
      `);
    }
  }

  setSize() {

    if (this.size() === 'md') {
      this.size_class.set('px-4 py-2 ml-2 text-sm text-center transition-all border border-transparent rounded-md shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none');
    }

  }

  click() {
    this.onClick.emit();
  }


}
