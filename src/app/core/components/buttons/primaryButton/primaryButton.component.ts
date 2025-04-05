import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primaryButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent { }
