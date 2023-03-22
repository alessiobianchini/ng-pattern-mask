# NgPatternMask

## Actions status
[![Build and publish library to github registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-github.yml)
[![Build and publish library to npm.js registry](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml/badge.svg)](https://github.com/alessiobianchini/ng-pattern-mask/actions/workflows/release-package-npmjs.yml)

## Install
`npm install ng-pattern-mask`


## Setup
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
## Configuration
| Parameter                        | Required | Description                                                                                                                                                                        |
| -------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngpmPattern`                 | Required | The pattern used by directive |
| `ngpmDigitPlaceholders`       | Optional | Digit placeholders used by directive - Default set = "dDmMyYhH09" |      
| `ngpmCharPlaceholders`        | Optional | Char placeholders used by directive - Default set = "_" |      
| `placeholder`                 | Optional | Input placeholder |      

## Basic usage
```html
<!-- directive -->
<input 
    ngPatternMask
    ngpmPattern="dd.MM.yyyy"
    placeholder="dd.MM.yyyy"
    ngpmDigitPlaceholders="dDmMyYhH09" <!-- OPTIONAL default = dDmMyYhH09 -->
    ngpmCharPlaceholders="_-" <!-- OPTIONAL default = _ -->
/>
```

