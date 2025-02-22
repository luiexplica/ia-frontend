
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { LayoutGlobalService } from '@services/layoutGlobal.service';
import { ButtonComponent } from "@components/button/button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './loginPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  layoutGlobalService = inject(LayoutGlobalService);

  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.layoutGlobalService.layoutFullScreen.set(true);
    this.layoutGlobalService.hideNavbar.set(true);
    this.layoutGlobalService.hideFooter.set(true);
  }

  emitSubmit(){

  }

  goTo(route: string) {
    this.layoutGlobalService.setLayoutDefault();
    this.router.navigate([route]);
  }

}
