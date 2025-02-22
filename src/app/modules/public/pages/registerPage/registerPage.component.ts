import { ButtonComponent } from '@components/button/button.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LayoutGlobalService } from '@services/layoutGlobal.service';

@Component({
  selector: 'app-register-page',
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './registerPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {

  layoutGlobalService = inject(LayoutGlobalService);

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.layoutGlobalService.layoutFullScreen.set(true);
    this.layoutGlobalService.hideNavbar.set(true);
    this.layoutGlobalService.hideFooter.set(true);
  }

  emitSubmit() {

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);
  }

}
