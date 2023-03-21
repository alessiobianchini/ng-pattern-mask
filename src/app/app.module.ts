import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPatternMaskModule } from 'projects/ng-pattern-mask/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPatternMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
