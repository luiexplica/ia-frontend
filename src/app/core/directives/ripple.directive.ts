import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

export type RippleColor = 'light' | 'dark';

@Directive({
  selector: '[RippleColor]',
})
export class RippleDirective {

  rippleColor = input<RippleColor>('dark', { alias: 'RippleColor' });

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) {}

  /**
   * Calcula el radio necesario para que la animación del ripple cubra todo el elemento.
   */
  private findFurthestPoint(
    clickX: number,
    elementWidth: number,
    offsetX: number,
    clickY: number,
    elementHeight: number,
    offsetY: number
  ): number {
    const x = clickX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    const y = clickY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    return Math.hypot(x - (clickX - offsetX), y - (clickY - offsetY));
  }

  /**
   * Aplica los estilos necesarios al span que actuará como ripple.
   */
  private applyStyles(
    circle: HTMLElement,
    rect: DOMRect,
    radius: number,
    event: MouseEvent
  ) {
    this.renderer.addClass(circle, 'ripple');
    const bgColor = this.rippleColor() === 'dark'
      ? 'rgba(0,0,0,0.2)'
      : 'rgba(255,255,255,0.3)';
    this.renderer.setStyle(circle, 'background-color', bgColor);
    this.renderer.setStyle(circle, 'border-radius', '50%');
    this.renderer.setStyle(circle, 'pointer-events', 'none');
    this.renderer.setStyle(circle, 'position', 'absolute');

    const left = event.clientX - rect.left - radius;
    const top = event.clientY - rect.top - radius;
    this.renderer.setStyle(circle, 'left', `${left}px`);
    this.renderer.setStyle(circle, 'top', `${top}px`);
    this.renderer.setStyle(circle, 'width', `${radius * 2}px`);
    this.renderer.setStyle(circle, 'height', `${radius * 2}px`);
  }

  /**
   * Aplica la animación al ripple usando la API de animaciones del navegador.
   */
  private applyAnimation(circle: HTMLElement) {
    circle.animate([
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(1.5)', opacity: 0 }
    ], {
      duration: 500,
      easing: 'linear'
    });
  }

  /**
   * Escucha el evento mouseup en el elemento donde se aplica la directiva.
   */
  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    const element = this.el.nativeElement as HTMLElement;

    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'overflow', 'hidden');

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

 }
