# angular2-focus

Angular2 directive that gives focus on an element depending on a given expression.

## Install

`npm install --save angular2-focus`

## Example

```typescript
import {NgModule, Component} from '@angular/core';
import {Focsu} from 'angular2-focus';

@Component({
  template: `
    <input type="text" focus="true">
  `
})
class AppComponent { }

@NgModule({
  imports: [Focus],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Check the [docs](docs) for a complete example.
