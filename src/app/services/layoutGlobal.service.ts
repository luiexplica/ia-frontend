import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutGlobalService {

  layoutFullScreen = signal<boolean>(false);

  hideNavbar = signal<boolean>(false);
  hideFooter = signal<boolean>(false);

  constructor() { }

  setLayoutDefault(){
    this.layoutFullScreen.set(false);
    this.hideNavbar.set(false);
    this.hideFooter.set(false);
  }

}
