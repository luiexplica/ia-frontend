import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-panel',
  imports: [
    RouterOutlet
  ],
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent { }
