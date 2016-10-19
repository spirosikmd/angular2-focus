import {NgModule} from '@angular/core';
import {FocusDirective} from './focus.directive';

@NgModule({
  declarations: [FocusDirective],
  exports: [FocusDirective]
})
export class Focus {
}
