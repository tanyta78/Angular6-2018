import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

const apiKey = '3307d46476bc058cd9ce7d2ac483dead';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path:string = 'https://api.themoviedb.org/3/';
  popular:string = 'discover/movie?sort_by=popularity.desc';
  theaters:string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  authentication:string = '&api_key=';

  constructor(private http: HttpClient) {  }

  getPopular(): Observable<Movie> {
    return this.http.get<Movie>(this.path + this.popular + this.authentication + apiKey);
  }

  getTheatres():Observable<Movie> {
    return this.http.get<Movie>(this.path + this.theaters + this.authentication + apiKey);
  }
}
