import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundStyle]'
})
export class BackgroundStyleDirective implements OnInit {
  @Input() defaultColor: string = '';
  @Input() highlightColor: string = '';

  @HostBinding('title') paragraphTitle: string = 'Paragraph Title';
  @HostBinding('style.color') textColor: string = '';

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseover') onMouseHover(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightColor);
    this.textColor = 'green';
  } 

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    this.textColor = '#333';
  } 
  

}
