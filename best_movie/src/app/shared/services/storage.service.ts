import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveFilm(id: any) {
    const savedFilm = this.getSavedFilm();
    savedFilm.push(id);
    localStorage.setItem('savedFilm', JSON.stringify(savedFilm));
  }

  getSavedFilm() {
    return JSON.parse(localStorage.getItem('savedFilm') || '[]');
  }
}
