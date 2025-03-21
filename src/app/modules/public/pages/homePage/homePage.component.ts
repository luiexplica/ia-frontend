import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropDownMenuComponent } from '../../../../core/components/menus/dropDownMenu/dropDownMenu.component';

@Component({
  selector: 'app-home-page',
  imports: [
    // ButtonComponent
    DropDownMenuComponent
  ],
  templateUrl: './homePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {


  listener(){
    console.log('click');

  }

}
