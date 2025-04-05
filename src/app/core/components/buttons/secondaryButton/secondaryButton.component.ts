import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondaryButton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryButtonComponent { }
