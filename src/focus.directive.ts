import {
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements OnInit, OnChanges {
  @Input() focus: boolean;
  private element: HTMLElement;

  constructor($element: ElementRef) {
    this.element = $element.nativeElement;
  }

  ngOnInit(): void {
    if (this.focus) {
      this.focusElement();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const focus = changes.focus;
    if (
      focus.currentValue !== focus.previousValue &&
      focus.currentValue === true
    ) {
      this.focusElement();
    }
  }

  focusElement(): void {
    this.element.focus();
  }
}
