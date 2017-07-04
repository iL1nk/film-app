import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FilmService } from './film.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchComponent } from './search/search.component';
import { SelectViewComponent } from './view-type/view-type.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    SearchComponent,
    SelectViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
