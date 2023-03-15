import { TestBed } from '@angular/core/testing';

import { BestMovieService } from './best-movie.service';

describe('BestMovieService', () => {
  let service: BestMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
