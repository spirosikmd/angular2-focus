import {NgModule, ModuleWithProviders} from '@angular/core';
import {FocusDirective} from './focus.directive';

@NgModule({
  declarations: [FocusDirective],
  exports: [FocusDirective]
})
export class FocusModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule: FocusModule
    };
  }
}
