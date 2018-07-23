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
  theaters:string = 'discover/movie?primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-07-22';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'; 
  dramas: string = 'discover/movie?with_genres=18&primary_release_year=2017'; 
  movie: string = 'movie/';
  search: string='search/movie?query=';
  authentication:string = '&api_key=';
  movieAuth:string = '?api_key=';

  constructor(private http: HttpClient) {  }

  getPopular(): Observable<Movie> {
    return this.http.get<Movie>(this.path + this.popular + this.authentication + apiKey);
  }

  getTheatres():Observable<Movie> {
    return this.http.get<Movie>(this.path + this.theaters + this.authentication + apiKey);
  }

  getKids():Observable<Movie> {
    return this.http.get<Movie>(this.path + this.kids + this.authentication + apiKey);
  }

  getDramas():Observable<Movie> {
    return this.http.get<Movie>(this.path + this.dramas + this.authentication + apiKey);
  }

  getMovie(id):Observable<Movie> {
    return this.http.get<Movie>(this.path + this.movie + id+ this.movieAuth + apiKey);
  }

  findAMovie(myQuery):Observable<Movie>{
    return this.http.get<Movie>(this.path + this.search + myQuery+ this.authentication + apiKey);
  }
}
