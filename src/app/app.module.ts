import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TileStateConverterPipe } from './tile-state-converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TileStateConverterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
