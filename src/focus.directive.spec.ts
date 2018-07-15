import { FocusDirective } from './focus.directive';
import { ElementRef } from '@angular/core';

describe('focus', function() {
  beforeEach(function() {
    this.elementRef = {
      nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])
    };
    this.directive = new FocusDirective(<ElementRef>this.elementRef);
  });

  describe('ngOnInit', function() {
    beforeEach(function() {
      spyOn(this.directive, 'focusElement');
    });

    it('does not call focusElement when focus is false', function() {
      this.directive.ngOnInit();
      expect(this.directive.focusElement).not.toHaveBeenCalled();
    });

    it('calls focusElement when focus is true', function() {
      this.directive.focus = true;
      this.directive.ngOnInit();
      expect(this.directive.focusElement).toHaveBeenCalled();
    });
  });

  describe('ngOnChanges', function() {
    beforeEach(function() {
      spyOn(this.directive, 'focusElement');
    });

    it('calls focusElement when focus current value is true and previous is false', function() {
      this.directive.ngOnChanges({
        focus: {
          previousValue: false,
          currentValue: true
        }
      });
      expect(this.directive.focusElement).toHaveBeenCalled();
    });

    it('does not call focusElement when focus current value is false', function() {
      this.directive.ngOnChanges({
        focus: {
          previousValue: true,
          currentValue: false
        }
      });
      expect(this.directive.focusElement).not.toHaveBeenCalled();
    });

    it('does not call focusElement when focus current value is same as previous value', function() {
      this.directive.ngOnChanges({
        focus: {
          previousValue: true,
          currentValue: true
        }
      });
      expect(this.directive.focusElement).not.toHaveBeenCalled();
    });
  });

  describe('focusElement', function() {
    it('calls focus on element ', function() {
      this.directive.focusElement();
      expect(this.elementRef.nativeElement.focus).toHaveBeenCalled();
    });
  });
});
