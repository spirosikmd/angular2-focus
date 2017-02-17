# angular2-focus

Angular attribute directive that gives focus on an element depending on a given expression.

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![PRs Welcome][prs-badge]](http://makeapullrequest.com)
[![All Contributors][all-contributors-badge]](#contributors)
[![Greenkeeper badge][greenkeeper-badge]](https://greenkeeper.io/)

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1057324?v=3" width="100px;"/><br /><sub>Spyros Ioakeimidis</sub>](http://www.spyros.io)<br />💬 [💻](https://github.com/spirosikmd/angular2-focus/commits?author=spirosikmd) [⚠️](https://github.com/spirosikmd/angular2-focus/commits?author=spirosikmd) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind welcome!

[version-badge]: https://img.shields.io/npm/v/angular2-focus.svg?style=flat-square
[package]: https://www.npmjs.com/package/angular2-focus
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/spirosikmd/angular2-focus.svg?style=flat-square
[build]: https://travis-ci.org/spirosikmd/angular2-focus.svg
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[greenkeeper-badge]: https://badges.greenkeeper.io/spirosikmd/angular2-focus.svg
