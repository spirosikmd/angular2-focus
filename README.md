# angular2-focus

[![Greenkeeper badge](https://badges.greenkeeper.io/spirosikmd/angular2-focus.svg)](https://greenkeeper.io/)

Angular2 directive that gives focus on an element depending on a given expression.

## Install

`npm install --save angular2-focus`

## Example

```typescript
import {NgModule, Component} from '@angular/core';
import {FocusModule} from 'angular2-focus';

@Component({
  template: `
    <input type="text" focus="true">
  `
})
class AppComponent { }

@NgModule({
  imports: [FocusModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Check the [docs](docs) for a complete example.
