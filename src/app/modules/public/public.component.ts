import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public',
  imports: [],
  templateUrl: './public.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicComponent { }
