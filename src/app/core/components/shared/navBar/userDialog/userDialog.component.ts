import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuItem_I } from '@interfaces/menus.interface';

@Component({
  selector: 'app-user-dialog',
  imports: [],
  templateUrl: './userDialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {

  userDialogOptions = signal<MenuItem_I[]>([])

 }
