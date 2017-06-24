import { GifCard } from './ui-elements/gif-card';
import { GiphyService } from './services/giphy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { SearchPage } from "app/pages/search";
import { BigCard } from "app/ui-elements/big-card";

@NgModule({
  declarations: [
    AppComponent,
    SearchPage,
    GifCard,
    BigCard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
