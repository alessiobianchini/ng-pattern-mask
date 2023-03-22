# NgPatternMask

## Actions status
[![Build and publish library to github registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml)
[![Build and publish library to npm.js registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


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

