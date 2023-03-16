import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BestMovieService } from 'src/app/best-movie.service';
import { Movie } from 'src/app/interface/movie.interface';

@Component({
  selector: 'app-liked-film',
  templateUrl: './liked-film.component.html',
  styleUrls: ['./liked-film.component.scss']
})
export class LikedFilmComponent implements OnInit {
  @Input() film!: Movie;

  likedMovie: Movie [] = [];

  constructor(private bestMovieService: BestMovieService) { }

  ngOnInit(): void {
    this.bestMovieService.getMovie().subscribe(({data}: any) => {
      this.likedMovie = this.bestMovieService.parseResponse({data});
    });
  }

  getSavedFilm() {
    return JSON.parse(localStorage.getItem('savedFilm') || '[]');
  }

  saveFilm(id: any) {
    const savedFilm = this.getSavedFilm();
    savedFilm.push(id);
    localStorage.setItem('savedFilm', JSON.stringify(savedFilm));
  }
}
