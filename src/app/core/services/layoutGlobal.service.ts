
import { HostListener, inject, Injectable, signal } from '@angular/core';
import { layoutScreenSize_Type } from '@interfaces/layoutGlobal.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LayoutGlobalService {

  screenSize = signal<layoutScreenSize_Type>('md');

  layoutFullScreen = signal<boolean>(false);
  hideNavbar = signal<boolean>(false);
  hideFooter = signal<boolean>(false);

  screens = {
        'xs': 400,
        'sm': 640,
        'md': 768,
        'pcTab': 1000,
        'lg': 1200,
        'xl': 1500,
        '2xl': 2000
      };

  constructor() {
    this.updateScreenSize();
    if (!window.onresize) {
      window.addEventListener('resize', () => this.updateScreenSize());

    }

  }

  setLayoutDefault() {
    this.layoutFullScreen.set(false);
    this.hideNavbar.set(false);
    this.hideFooter.set(false);

  }

  setLayoutFullScreen() {
    this.layoutFullScreen.set(true);
    this.hideNavbar.set(true);
    this.hideFooter.set(true);

  }

  updateScreenSize() {
    const width = window.innerWidth;

    if (width < this.screens.xs) {
      this.screenSize.set('xs');

    }
    else if (width >= this.screens.xs && width < this.screens.sm) {
      this.screenSize.set('sm');

    }
    else if (width >= this.screens.sm && width < this.screens.md) {
      this.screenSize.set('md');

    }
    else if (width >= this.screens.md && width < this.screens.pcTab) {
      this.screenSize.set('pcTab');

    }
    else if (width >= this.screens.pcTab && width < this.screens.lg) {
      this.screenSize.set('lg');

    }
    else if (width >= this.screens.lg && width < this.screens.xl) {
      this.screenSize.set('xl');

    }
    else if (width >= this.screens.xl && width < this.screens['2xl']) {
      this.screenSize.set('2xl');

    }
    else {
      this.screenSize.set('2xl');

    }

  }

  checkSize(size: layoutScreenSize_Type) {

    const currentSize = this.screenSize();

    const screenSizes = Object.keys(this.screens) as layoutScreenSize_Type[];
    const currentIndex = screenSizes.indexOf(currentSize);
    const sizeIndex = screenSizes.indexOf(size);

    return currentIndex >= sizeIndex;

   }



}
