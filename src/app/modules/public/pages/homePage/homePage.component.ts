import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
  selector: 'app-home-page',
  imports: [
    ButtonComponent
  ],
  templateUrl: './homePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {


  listener(){
    console.log('click');

  }

}
