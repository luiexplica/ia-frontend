import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-home-page',
  imports: [
  ],
  templateUrl: './homePage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  listener() {
    console.log('click');

  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    (element) && (element.classList.toggle('my-app-dark'));
  }

}
