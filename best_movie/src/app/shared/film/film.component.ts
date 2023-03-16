import { Component, Input, OnInit } from '@angular/core';
import { GENRE } from 'src/app/genre';
import { Movie } from 'src/app/interface/movie.interface';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  genres = GENRE;

  @Input() film!: Movie;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    
  }

  saveFilm(id: any) {
    this.storageService.saveFilm(id);
  }

}
