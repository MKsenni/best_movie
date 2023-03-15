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

  constructor(private BestMovieService: BestMovieService) {}

  ngOnInit(): void {
    this.BestMovieService.getMovie().subscribe(({data}: any) => {
      
      console.log(data);
      
      const {movies} = data;
      this.moviesList = movies.map((item: any) => {
        return {
          picture: item.picture,
          name: item.name,
          genre: item.genre,
          year: item.year,
          id: item.id,
          description: item.description,
        };
      });
    });
  }
}
