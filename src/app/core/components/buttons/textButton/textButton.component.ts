import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-button',
  imports: [],
  templateUrl: './textButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextButtonComponent { }
