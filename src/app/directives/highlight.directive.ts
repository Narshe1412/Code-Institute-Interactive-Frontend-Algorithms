import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';

@Directive({
  selector: '[appHighlight]'
})
/**
 * This directive handles the code hihglighter from the library Highlight.js
 * @usage Add appHighlight to the code HTML tag preceded by a pre HTML tag. This will colorize the code within.
 * @example
 * <pre><code class="javascript" appHighlight>
 *   function bubbleSort(arr: number[]): number[] {
 *     return arr;
 *   }
 *   </code></pre>
 */
export class HighlightDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.element.nativeElement);
  }
}
