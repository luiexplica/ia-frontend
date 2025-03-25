import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { NavBarComponent } from '@components/shared/navBar/navBar.component';
import { LayoutGlobalService } from '@core/services/layoutGlobal.service';

@Component({
  selector: 'app-application',
  imports: [
    FooterComponent,
    NavBarComponent
  ],
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {

    layoutGlobalService = inject(LayoutGlobalService);

    fullWidth = computed( () => this.layoutGlobalService.layoutFullScreen() );
    hideNavbar = computed( () => this.layoutGlobalService.hideNavbar() );
    hideFooter = computed( () => this.layoutGlobalService.hideFooter() );

}
