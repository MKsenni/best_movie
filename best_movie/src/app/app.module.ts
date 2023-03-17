import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HttpClientModule } from '@angular/common/http';
import { BestMovieService } from './best-movie.service';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { StorageService } from './shared/services/storage.service';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

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
    MatButtonModule,
    NgmaterialModule,
    FormsModule,
    MatSelectModule,
  ],
providers: [
  BestMovieService,
  StorageService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
