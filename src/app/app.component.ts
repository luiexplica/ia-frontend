import { Component, signal, effect, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'ia-frontend';
  loaded = signal(false);

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    this.loaded.set(true);

  }

      // angular effect



}
