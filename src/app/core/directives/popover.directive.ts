// popover-trigger.directive.ts
import { Directive, ElementRef, Input, OnInit, OnDestroy, HostListener, input } from '@angular/core';
import { computePosition, flip, inline, shift, offset, Placement } from '@floating-ui/dom';

@Directive({
  selector: '[appPopoverTrigger]'
})
export class PopoverTriggerDirective implements OnInit, OnDestroy {
  // @Input('appPopoverTrigger') popoverId!: string; // Identificador del popover, ej: "miPopover"
  popoverId = input<string>('', { alias: 'appPopoverTrigger' }); // Alias externo
  // popoverPlacement: Placement = 'top';
  popoverPlacement = input<Placement>('top', { alias: 'popoverPlacement' });

  popoverOffset: number = 5;
  popoverMountClasses: string = 'opacity-1';
  popoverUnmountClasses: string = 'pointer-events-none opacity-0';
  popoverTransitionClasses: string = 'transition-opacity duration-300';

  private popoverElement!: HTMLElement | null;
  private documentClickHandler = this.handleDocumentClick.bind(this);
  private documentKeyupHandler = this.handleDocumentKeyup.bind(this);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('se inicia');
    // Busca el elemento popover según el identificador pasado
    this.popoverElement = document.querySelector(`[data-popover="${this.popoverId()}"]`);
    if (this.popoverElement) {
      const unmountClasses = this.popoverUnmountClasses.split(' ');
      const transitionClasses = this.popoverTransitionClasses !== 'false'
        ? this.popoverTransitionClasses.split(' ')
        : [];
      // Inicializa el popover con clases de ocultamiento y transición
      this.popoverElement.classList.add(...unmountClasses, ...transitionClasses);
      if (!this.popoverElement.hasAttribute('tabindex')) {
        this.popoverElement.setAttribute('tabindex', '0');
      }
    }

    // Agrega listeners globales para cerrar el popover al hacer click fuera o presionar Escape
    document.addEventListener('click', this.documentClickHandler);
    document.addEventListener('keyup', this.documentKeyupHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.documentClickHandler);
    document.removeEventListener('keyup', this.documentKeyupHandler);
  }

  private setPosition() {
    if (!this.popoverElement) return;
    computePosition(this.el.nativeElement, this.popoverElement, {
      placement: this.popoverPlacement(),
      middleware: [flip(), inline(), shift(), offset(this.popoverOffset)]
    }).then(({ x, y }) => {
      Object.assign(this.popoverElement!.style, {
        top: `${y}px`,
        left: `${x}px`
      });
    });
  }

  private mountPopover() {
    if (!this.popoverElement) return;
    this.setPosition();
    const mountClasses = this.popoverMountClasses.split(' ');
    const unmountClasses = this.popoverUnmountClasses.split(' ');
    this.popoverElement.classList.remove(...unmountClasses);
    this.popoverElement.classList.add(...mountClasses);
  }

  private unmountPopover() {
    if (!this.popoverElement) return;
    this.setPosition();
    const mountClasses = this.popoverMountClasses.split(' ');
    const unmountClasses = this.popoverUnmountClasses.split(' ');
    this.popoverElement.classList.remove(...mountClasses);
    this.popoverElement.classList.add(...unmountClasses);
  }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    if (!this.popoverElement) return;
    // Aquí se puede usar como bandera la presencia de una clase de ocultamiento.
    // Por ejemplo, se comprueba el primer valor de popoverUnmountClasses.
    const unmountFlag = this.popoverUnmountClasses.split(' ')[0];
    if (this.popoverElement.classList.contains(unmountFlag)) {
      this.mountPopover();
    } else {
      this.unmountPopover();
    }
    event.stopPropagation();
  }

  private handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target) return;
    // Si el click se hace fuera del trigger y del popover, se oculta
    if (
      this.popoverElement &&
      !this.el.nativeElement.contains(target) &&
      !this.popoverElement.contains(target)
    ) {
      this.unmountPopover();
    }
  }

  private handleDocumentKeyup(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.unmountPopover();
    }
  }
}
