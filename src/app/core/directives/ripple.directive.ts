import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

export type RippleColor = 'light' | 'dark' | 'none';

@Directive({
  selector: '[RippleColor]',
})
export class RippleDirective {

  rippleColor = input<RippleColor>('none', { alias: 'RippleColor' });

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');

  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    this.createRipple(event);

  }

  private createRipple(event: MouseEvent): void {

    if(this.rippleColor() === 'none') return;

    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const radius = this.findFurthestPoint(
      event.clientX,
      element.offsetWidth,
      rect.left,
      event.clientY,
      element.offsetHeight,
      rect.top
    );

    const circle = this.renderer.createElement('span');
    this.applyStyles(circle, rect, radius, event);
    this.applyAnimation(circle);

    this.renderer.appendChild(element, circle);

    setTimeout(() => {
      this.renderer.removeChild(element, circle);
    }, 500);

  }

  private findFurthestPoint(
    clickPointX: number,
    elementWidth: number,
    offsetX: number,
    clickPointY: number,
    elementHeight: number,
    offsetY: number
  ): number {
    const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    return Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));

  }

  private applyStyles(
    element: HTMLElement,
    rect: DOMRect,
    radius: number,
    event: MouseEvent
  ): void {
    const color = this.rippleColor() === 'dark'
      ? 'rgba(0,0,0, 0.2)'
      : 'rgba(255,255,255, 0.3)';

    this.renderer.addClass(element, 'ripple');
    this.renderer.setStyle(element, 'backgroundColor', color);
    this.renderer.setStyle(element, 'borderRadius', '50%');
    this.renderer.setStyle(element, 'pointerEvents', 'none');
    this.renderer.setStyle(element, 'position', 'absolute');
    this.renderer.setStyle(element, 'left', `${event.clientX - rect.left - radius}px`);
    this.renderer.setStyle(element, 'top', `${event.clientY - rect.top - radius}px`);
    this.renderer.setStyle(element, 'width', `${radius * 2}px`);
    this.renderer.setStyle(element, 'height', `${radius * 2}px`);

  }

  private applyAnimation(element: HTMLElement): void {
    const animation = element.animate([
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(1.5)', opacity: 0 }
    ], {
      duration: 500,
      easing: 'linear'
    });

    animation.play();

  }

}