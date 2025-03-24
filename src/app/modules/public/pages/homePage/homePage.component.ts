import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropDownMenuComponent } from '../../../../core/components/menus/dropDownMenu/dropDownMenu.component';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';


@Component({
  selector: 'app-home-page',
  imports: [
    // ButtonComponent
    ButtonModule,
    PopoverModule
    // DropDownMenuComponent

  ],
  templateUrl: './homePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {


  listener(){
    console.log('click');

  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    (element) && (element.classList.toggle('my-app-dark'));
}

}
