import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundStyle]'
})
export class BackgroundStyleDirective implements OnInit {

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseover') onMouseHover(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  } 

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  } 

}
