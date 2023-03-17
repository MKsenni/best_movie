import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  @Output() findFilms = new EventEmitter<{searchTerm: string}>();

  searchTerm: string = ''

  constructor() {}

  handleSearch (e: KeyboardEvent) {
    if(e.key === 'Enter') {
      this.findFilms.emit({searchTerm: this.searchTerm})
    }
  }

}
