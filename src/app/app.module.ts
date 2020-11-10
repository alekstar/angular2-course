import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { LogEntryComponent } from './log-entry/log-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDetailsComponent,
    LogEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
