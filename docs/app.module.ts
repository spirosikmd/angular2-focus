import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FocusModule} from '../';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FocusModule.forRoot(), ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
