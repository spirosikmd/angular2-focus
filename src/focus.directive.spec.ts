import {FocusDirective} from './focus.directive';
import {ElementRef} from '@angular/core';

describe('focus', function () {
  beforeEach(function () {
    this.elementRef = {
      nativeElement: jasmine.createSpyObj('nativeElement', ['focus'])
    };
    this.directive = new FocusDirective(<ElementRef>this.elementRef);
  });

  describe('ngAfterContentChecked', function () {
    it('calls giveFocus', function () {
      spyOn(this.directive, 'giveFocus');
      this.directive.ngAfterContentChecked();
      expect(this.directive.giveFocus).toHaveBeenCalled();
    });
  });

  describe('giveFocus', function () {
    it('calls focus on element when focus is true', function () {
      this.directive.focus = true;
      this.directive.giveFocus();
      expect(this.elementRef.nativeElement.focus).toHaveBeenCalled();
    });

    it('does not call focus on element if has been given focus already', function () {
      this.directive.hasFocused = true;
      this.directive.giveFocus();
      expect(this.elementRef.nativeElement.focus).not.toHaveBeenCalled();
    });
  });
});
