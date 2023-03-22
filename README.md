<h1 align="center">
NgPatternMask
</h1>

<p align="center">Angular library to mask input fields using a pattern.</p>

---

## Status
[![Build and publish library to github registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml)
[![Build and publish library to npm.js registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml)

## Demo app

Run `ng serve` for a dev server with an example. Navigate to `http://localhost:4200/`.


## Install
`npm install ng-pattern-mask`

## Configuration
```javascript
import {NgPatternMaskModule} from 'ng-pattern-mask';

@NgModule({
  imports: [
    NgPatternMaskModule,
    ...
  ],
  ...
}) {...}
```

## Basic usage
```html
<!-- directive -->
<input 
    ngPatternMask
    ngpmPattern="dd.MM.yyyy"
    placeholder="dd.MM.yyyy"
    ngpmDigitPlaceholders="dDmMyYhH09" <!-- OPTIONAL default = "dDmMyYhH09" -->
    ngpmCharPlaceholders="_" <!-- OPTIONAL default = "_" -->
/>
```

