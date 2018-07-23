import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie;
  
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie():void{
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.moviesService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      })
    })
  }

  goBack(): void{
    this.location.back();
  }

}
