import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  kids: Object;
  dramas: Object;
  searched:any;
  isSearch: boolean;
 
  constructor( private movieService: MoviesService) {
   
  }

  search(myQuery){
    let value = myQuery['search'];
    this.movieService.findAMovie(value).subscribe(data=>{
      console.log(data.results);
      if(data.results.length > 0){
        this.searched = data;
        this.isSearch=true;
      }
      
    })
  }

  ngOnInit() {
    this.movieService
      .getPopular()
      .subscribe(data => {
          this.popular = data;
        
    })
    this.movieService
      .getTheatres()
      .subscribe(data => {
          this.theaters = data;
         
    })
    this.movieService
      .getKids()
      .subscribe(data => {
          this.kids = data;
    })
    this.movieService
      .getDramas()
      .subscribe(data => {
          this.dramas = data;
        
    })
  }



}
