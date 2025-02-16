import { AfterViewChecked, AfterViewInit, Component, signal } from '@angular/core';

declare const ripple: any;
@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewChecked  {


  title = 'ia-frontend';
  loaded = signal(false);

  ngAfterViewChecked(): void {
    console.log('ripple', ripple);
    if (typeof ripple !== 'undefined') {

      ripple.initialize();
    }

  }




}
