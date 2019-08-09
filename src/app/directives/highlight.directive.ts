import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.element.nativeElement);
  }
}
