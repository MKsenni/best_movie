import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GENRE } from './genre';

@Injectable({
  providedIn: 'root'
})
export class BestMovieService {

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get('../assets/data.json');
  }

  parseResponse({data}: any) {
    let genreFilm = GENRE;
    const {movies} = data;
      return movies.map((item: any) => {
        return {
          url: item.url,
          name: item.name,
          year: item.year,
          id: item.id,
          description: item.description,
          genre: item.genre.map((id: number) => genreFilm.find(genre => genre.id === id)).filter(Boolean).map((genre: any) => genre.name),
        };
      });
    }
}
