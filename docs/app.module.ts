import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {Focus} from '../index';
@NgModule({
  imports: [BrowserModule, Focus],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
