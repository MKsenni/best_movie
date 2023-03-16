import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interface/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  @Input() searchList: Movie[] = [];
  @Output() findFilms = new EventEmitter<{searchTerm: string}>();

  searchTerm: string = ''

  constructor() {}

  handleSearch (e: KeyboardEvent) {
    if(e.key === 'Enter') {
      this.findFilms.emit({searchTerm: this.searchTerm})
      
    }
  }

}
