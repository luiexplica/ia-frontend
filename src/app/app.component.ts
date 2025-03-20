import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgxSonnerToaster
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'ia-frontend';

  authService = inject(AuthService);

  ngOnInit(): void {
    this.initComponent();

  }

  async initComponent() {
      await this.authService.checkSession();

  }

}
