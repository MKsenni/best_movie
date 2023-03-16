import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import { LikedFilmComponent } from './liked-film/liked-film.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [
    FilmComponent,
    LikedFilmComponent,
    SearchComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FilmComponent,
    LikedFilmComponent,
    SearchComponent,
    FormsModule,
  ],
})
export class SharedModule { }
