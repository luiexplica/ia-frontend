import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [
    // ButtonComponent
  ],
  templateUrl: './homePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {


  listener(){
    console.log('click');

  }

}
