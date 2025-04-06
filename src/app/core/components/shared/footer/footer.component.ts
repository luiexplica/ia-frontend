import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextButtonComponent } from '@components/buttons/textButton/textButton.component';
import { Facebook_Icon } from '../../../models/icons/facebook';

@Component({
  selector: 'footer-bar',
  imports: [
    TextButtonComponent
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  facebookIcon = Facebook_Icon();

}
