import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';
const stubElement: ElementRef = null;

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(stubElement);
    expect(directive).toBeTruthy();
  });
});
