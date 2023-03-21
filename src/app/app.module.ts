import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPatternMaskModule } from 'ng-pattern-mask';

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
