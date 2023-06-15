import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
