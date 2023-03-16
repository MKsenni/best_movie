import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() filterFilms = new EventEmitter<{genre: any}>();

  handleFilter(genre: any) {

    this.filterFilms.emit({ genre })

  }
}
