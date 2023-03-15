import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HttpClientModule } from '@angular/common/http';
import { BestMovieService } from './best-movie.service';
import { SharedModule } from './shared/shared.module';
// import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    SharedModule,
    // MatButton,
  ],
providers: [BestMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
