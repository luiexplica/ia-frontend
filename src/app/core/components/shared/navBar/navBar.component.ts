import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { MenuItem_I } from '@interfaces/menus.interface';
import { JsonPipe, NgClass } from '@angular/common';
import { MenuListComponent } from '@components/menus/menuList/menuList.component';

@Component({
  selector: 'nav-bar',
  imports: [
    ButtonComponent,
    MenuListComponent,
    NgClass
  ],
  templateUrl: './navBar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {

  collapseMenu = signal(false);

  menuItems = input.required<MenuItem_I[]>();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  toggleCollapseMenu() {

    this.collapseMenu.set(!this.collapseMenu());

  }

}
