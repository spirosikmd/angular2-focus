import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {
  @Input() focus: boolean;
  private element: HTMLElement;
  private hasFocused = false;

  constructor($element: ElementRef) {
    this.element = $element.nativeElement;
  }

  ngAfterContentChecked() {
    this.giveFocus();
  }

  giveFocus() {
    if (this.focus && !this.hasFocused) {
      this.element.focus();
      this.hasFocused = true;
    }
  }
}
