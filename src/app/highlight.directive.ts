import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  highlightQuote() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'blue';
  }
  ngOnInit() {
    this.highlightQuote();
  }

}
