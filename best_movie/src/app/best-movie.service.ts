import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BestMovieService {

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get('../assets/data.json');
  }
}
