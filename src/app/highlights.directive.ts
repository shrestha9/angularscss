import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor ="red";
   }

}
