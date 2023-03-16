import { Component, OnInit } from '@angular/core';
import { BestMovieService } from './best-movie.service';
import { Movie } from './interface/movie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  moviesList: Movie [] = [];
  filteredList: Movie [] = [];

  constructor(private bestMovieService: BestMovieService) {}

  ngOnInit(): void {

    this.bestMovieService.getMovie().subscribe(({data}: any) => {
      this.moviesList = this.bestMovieService.parseResponse({data})
      this.filteredList = this.bestMovieService.parseResponse({data})
      console.log(data);
    });
  }

  onSearch(eventData: {searchTerm: string}) {
    this.filteredList = this.moviesList.filter(item => item.name.toLocaleLowerCase().includes(eventData.searchTerm.toLowerCase()))
  }

  onFilter(eventData: {genre: any}) {
    this.filteredList = this.moviesList.filter(item => item.genre === eventData.genre)
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
