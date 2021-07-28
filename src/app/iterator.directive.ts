import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIterator]'
})
export class IteratorDirective {
  @Input() set appIterator(value: any[]) {
    if(value.length > 0) {
      value.forEach(item => {
        this.viewRef.createEmbeddedView(this.templateRef, {item});
      })
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
