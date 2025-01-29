import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MidBodyLayoutComponent } from './core/layouts/midBodyLayout/midBodyLayout.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ia-frontend';
}
